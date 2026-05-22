from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=4000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactResponse(BaseModel):
    success: bool
    id: str
    message: str = "Thanks — your message has been delivered."


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Portfolio API"}


@api_router.get("/health")
async def health():
    return {"status": "ok", "service": "portfolio"}


@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(payload: ContactMessageCreate):
    try:
        msg = ContactMessage(
            name=payload.name.strip(),
            email=payload.email,
            message=payload.message.strip(),
        )
        doc = msg.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        await db.contact_messages.insert_one(doc)
        logger.info(f"New contact message from {msg.email} (id={msg.id})")
        return ContactResponse(success=True, id=msg.id)
    except Exception as e:
        logger.exception("Failed to save contact message")
        raise HTTPException(status_code=500, detail="Could not save message.")


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contact_messages():
    msgs = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for m in msgs:
        if isinstance(m.get('created_at'), str):
            try:
                m['created_at'] = datetime.fromisoformat(m['created_at'])
            except ValueError:
                pass
    return msgs


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
