# Portfolio – Guillaume Girishya

## Problem Statement
"Build a landing page: a portfolio for myself."

User identity from uploaded resume: Guillaume Girishya — CS student @ Missouri State (Class of 2026), based in Charlotte, NC, available for hire.

User choices captured (verbatim):
- Visual style: **1.B → Modern dark / tech**
- Contact form: **3.a → Functional contact form**
- Accent color: **4.a → Designer picks (Neon Amber #FFB000)**
- "I am available for hire" → reflected as a status badge + availability block.

## Architecture
- **Backend**: FastAPI (`/app/backend/server.py`), MongoDB collection `contact_messages`.
  - `GET /api/health` — health probe
  - `POST /api/contact` — accepts `{name, email, message}`, persists with UUID + ISO timestamp.
  - `GET /api/contact` — admin list (no auth — personal site, no PII expectations).
- **Frontend**: React (CRA + Tailwind + shadcn/ui already configured).
  - Single-page scroll layout. Sections: Hero, About, Experience, Projects, Skills, Education, Contact, Footer.
  - Fonts: Outfit (display), IBM Plex Sans (body), JetBrains Mono (technical labels).
  - Palette: #050505 base / #FFB000 accent.
  - Icons: lucide-react. Toasts: sonner.

## Implemented (Dec 2025)
- Functional contact form posting to backend (validated end-to-end by testing_agent_v3).
- 5 project cards (BEARCHAT, Founderverse, Restaurant App, Bear Bank, Micro:bit).
- 2 experience entries, 4-group terminal-style skills, education + 4 certs + award.
- Sticky glass navbar with smooth-scroll links + mobile menu.
- Available-for-hire status badge in hero + dedicated availability block in contact.
- Footer with social links, direct email, back-to-top.
- All interactive elements carry `data-testid` attributes.

## Test Status
- Iteration 1 (testing_agent_v3): backend **100%**, frontend **100%**.
- Minor follow-ups applied: logger declared before routes; contact form now `noValidate` so JS toast branch is reachable.

## P0 / P1 / P2 backlog (next tasks)
- **P1**: Wire contact submissions to email (Resend or SendGrid) so Guillaume gets notifications.
- **P1**: Replace placeholder portrait with a real photo (`PROFILE.portraitUrl` in `src/data/portfolio.js`).
- **P2**: Add live GitHub links per project + deployed demo links.
- **P2**: Add an admin page or basic auth for `GET /api/contact`.
- **P2**: SEO meta tags, Open Graph image, favicon.
- **P2**: Light-mode toggle (dark is canonical).

## Test Credentials
N/A — no auth in this app.
