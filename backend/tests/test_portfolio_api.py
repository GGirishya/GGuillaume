"""Backend API tests for Portfolio app: /api/health and /api/contact."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://my-portfolio-893.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---- Health ----
def test_health_ok(client):
    r = client.get(f"{API}/health", timeout=15)
    assert r.status_code == 200
    data = r.json()
    assert data.get("status") == "ok"


# ---- Contact POST validation ----
def test_contact_invalid_email_returns_422(client):
    r = client.post(f"{API}/contact", json={"name": "TEST_Bob", "email": "not-an-email", "message": "Hi"})
    assert r.status_code == 422


def test_contact_empty_name_returns_422(client):
    r = client.post(f"{API}/contact", json={"name": "", "email": "a@b.com", "message": "Hi"})
    assert r.status_code == 422


def test_contact_empty_message_returns_422(client):
    r = client.post(f"{API}/contact", json={"name": "TEST_Eve", "email": "a@b.com", "message": ""})
    assert r.status_code == 422


# ---- Contact POST success + persistence + GET ordering + no _id ----
def test_contact_create_persists_and_lists(client):
    payload = {"name": "TEST_Alice", "email": "test_alice@example.com", "message": "Hello from pytest"}
    r = client.post(f"{API}/contact", json=payload, timeout=15)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data.get("success") is True
    assert isinstance(data.get("id"), str) and len(data["id"]) >= 32

    new_id = data["id"]

    # GET list
    g = client.get(f"{API}/contact", timeout=15)
    assert g.status_code == 200
    msgs = g.json()
    assert isinstance(msgs, list)
    # No mongo _id should be exposed
    for m in msgs:
        assert "_id" not in m

    # Our msg present
    found = [m for m in msgs if m.get("id") == new_id]
    assert len(found) == 1
    assert found[0]["name"] == "TEST_Alice"
    assert found[0]["email"] == "test_alice@example.com"
    assert found[0]["message"] == "Hello from pytest"

    # Sorted desc by created_at: first item created_at >= last
    if len(msgs) >= 2:
        assert msgs[0]["created_at"] >= msgs[-1]["created_at"]
