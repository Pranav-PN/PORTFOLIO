# Pranav's Portfolio

My personal portfolio website. Built with React 19, FastAPI, and MongoDB. Designed with a classical marble aesthetic.

## What's Here

- **Frontend** — React + Tailwind + Framer Motion for smooth scrolling and parallax effects
- **Backend** — FastAPI async server with REST endpoints for contact submissions and status updates
- **Database** — MongoDB for storing portfolio data

## Quick Start

```bash
# Frontend
cd frontend && npm install --legacy-peer-deps && npm start

# Backend (in another terminal)
cd backend
python -m venv venv
venv\Scripts\Activate.ps1  # or: source venv/bin/activate
pip install -r requirements.txt
python server.py
```

Frontend runs on `http://localhost:3000`  
Backend runs on `http://localhost:8000` (API docs at `/docs`)

## Setup `.env` (Backend)

```env
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"
```

## Customization

Change portfolio content in `frontend/src/data/portfolio.js` — all profile, projects, skills, experience, and testimonials live there.

Tweak design in `frontend/tailwind.config.js` and `frontend/src/index.css`.

## Deployment

- **Frontend** → Vercel (connect GitHub, auto-deploys)
- **Backend** → Render or Railway (set env vars, deploy)
- **Database** → MongoDB Atlas (free tier available)

## API Endpoints

- `POST /api/contact` — Submit contact form
- `GET /api/contact` — Retrieve messages
- `GET /api/` — Health check

## Tech Stack

React 19 · Tailwind CSS · Framer Motion · Lenis · FastAPI · MongoDB · Pydantic · Motor

---



