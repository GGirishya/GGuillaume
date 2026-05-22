# Portfolio – Guillaume Girishya

## Problem Statement
"Build a landing page: a portfolio for myself."

User identity: Guillaume Girishya — B.S. Computer Science, Missouri State University (Class of 2026, recently graduated). Based in Charlotte, NC. Available now, open to Onsite / Remote / Hybrid.

User choices captured:
- Visual style: Modern dark / tech (1.B)
- Contact form: Functional (3.a)
- Accent color: Designer-picked Neon Amber #FFB000 (4.a)
- Email notifications: Deferred (3.c skip)
- Available for hire across Onsite / Remote / Hybrid.

## Architecture
- **Backend**: FastAPI (`/app/backend/server.py`), MongoDB collection `contact_messages`.
  - `GET /api/health` — health probe
  - `POST /api/contact` — accepts `{name, email, message}`, persists with UUID + ISO timestamp
  - `GET /api/contact` — admin list (no auth)
- **Frontend**: React (CRA + Tailwind + shadcn/ui).
  - Single-page scroll. Sections: Hero, About, Experience, Projects, Skills, Education, Contact, Footer.
  - Fonts: Outfit / IBM Plex Sans / JetBrains Mono.
  - Palette: #050505 base, #FFB000 accent.
  - Icons: lucide-react. Toasts: sonner.

## Implemented (Dec 2025)
- Functional contact form posting to `/api/contact` (validated 100% by testing_agent_v3 iter-1).
- 5 project cards with Live site / Source links: BearChat (source), Founderverse (live), Juxprynx singer site (source), Marriott Homes & Villas (source), Netflix Movie Suggestion (source).
- 2 experience entries, 4-group terminal-style skills, education + 4 certs + 1 award.
- Sticky glass navbar with smooth-scroll links + mobile menu.
- Hero badge "B.S. Computer Science · 2026 Graduate · Available now"; Work-mode chips Onsite / Remote / Hybrid in hero meta + Contact availability block.
- Real headshot in About section (grayscale → color on hover, gradient label overlay).
- Footer with email, GitHub, LinkedIn, back-to-top.
- All interactive elements have `data-testid` attributes.

## Test Status
- Iteration 1 (testing_agent_v3): backend 100%, frontend 100%.

## Backlog
- **P1**: Wire contact submissions to email (Resend or SendGrid) — currently deferred.
- **P2**: Add demo URLs as projects go live; add screenshots specific to each project.
- **P2**: Basic auth for `GET /api/contact`.
- **P2**: SEO meta, Open Graph image, favicon.
- **P2**: Light-mode toggle.

## Test Credentials
N/A — no auth in this app.
