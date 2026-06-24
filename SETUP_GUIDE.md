# Portfolio Project - Complete Setup Guide

This is a full-stack portfolio application with a React frontend and FastAPI backend.

---

## **Prerequisites**

Before starting, ensure you have installed:
- **Node.js** (v18+) - [Download](https://nodejs.org/)
- **Python** (v3.10+) - [Download](https://www.python.org/)
- **MongoDB** (Local or Cloud) - [Download](https://www.mongodb.com/try/download/community)
- **Git** (Optional)

---

## **Project Structure**

```
app/
├── frontend/          # React application
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── backend/           # FastAPI server
│   ├── server.py
│   ├── .env
│   └── requirements.txt
└── designguidelines.json
```

---

## **PART 1: Backend Setup (FastAPI + MongoDB)**

### Step 1.1: Create Python Virtual Environment

Open PowerShell in the `backend` folder:

```powershell
cd c:\Users\Pranav\Desktop\app\backend
python -m venv venv
```

### Step 1.2: Activate Virtual Environment

```powershell
# Windows PowerShell
.\venv\Scripts\Activate.ps1

# If you get an error, run this first:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# Then try the Activate.ps1 command again
```

You should see `(venv)` in your terminal prompt.

### Step 1.3: Install Python Dependencies

```powershell
pip install -r requirements.txt
```

**Expected output:** Shows "Successfully installed..." for all packages

### Step 1.4: Verify MongoDB is Running

**Option A: MongoDB Local Installation**
- Start MongoDB locally (it runs on `localhost:27017` by default)
- Windows: Search "MongoDB" in Start Menu and run mongod service

**Option B: MongoDB Atlas (Cloud)**
- Update `.env` file with your MongoDB Atlas connection string
- Replace `MONGO_URL="mongodb://localhost:27017"` with your Atlas URL

### Step 1.5: Test Backend Server

```powershell
python server.py
# OR
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

**Success indicators:**
- Terminal shows: `Uvicorn running on http://127.0.0.1:8000`
- Visit http://localhost:8000/docs to see API documentation

**Keep this terminal open** (this is your backend server running)

---

## **PART 2: Frontend Setup (React + Tailwind)**

### Step 2.1: Open New PowerShell Terminal

Open a **NEW** PowerShell window and navigate to frontend:

```powershell
cd c:\Users\Pranav\Desktop\app\frontend
```

### Step 2.2: Install Node Dependencies

The project uses **Yarn** as the package manager (specified in package.json).

**If you have yarn installed:**
```powershell
yarn install
```

**If you don't have yarn, install it first:**
```powershell
npm install -g yarn
yarn install
```

**Alternative (using npm):**
```powershell
npm install
```

**Expected output:** Shows "added X packages"

### Step 2.3: Start Development Server

```powershell
yarn start
# OR
npm start
```

**Expected output:**
- Webpack compiler runs
- React dev server starts on http://localhost:3000
- Browser automatically opens the portfolio

---

## **PART 3: Running Both Simultaneously**

You now have **3 terminals open**:

1. **Terminal 1** - Backend (FastAPI) running on `http://localhost:8000`
2. **Terminal 2** - Frontend (React) running on `http://localhost:3000`
3. **Terminal 3** - For git commands or other tasks (optional)

**Your full application is now running!**

---

## **Environment Configuration**

### Backend `.env` file (Already created)

Located at: `backend/.env`

```
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"
```

**Customize if needed:**
- `MONGO_URL`: Change if using MongoDB Atlas
- `DB_NAME`: Your database name
- `CORS_ORIGINS`: Specify allowed origins for API requests

### Frontend `.env` (Optional)

If you need frontend environment variables, create `frontend/.env`:

```
REACT_APP_API_URL=http://localhost:8000
```

Then restart the frontend server.

---

## **Testing the Connection**

### Test Backend API

Open browser and visit:
- **API Docs**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/ (should show API info)

### Test Frontend

Open browser and visit:
- **Portfolio**: http://localhost:3000

---

## **Common Issues & Solutions**

### Issue 1: "Port 3000 is already in use"

```powershell
# Kill the process using port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
npm start -- --port 3001
```

### Issue 2: "Python: venv not recognized"

```powershell
# Make sure you're in the backend directory
cd c:\Users\Pranav\Desktop\app\backend

# Try full path
.\venv\Scripts\python.exe -m pip install -r requirements.txt
```

### Issue 3: "MongoDB connection refused"

- Ensure MongoDB is running locally OR
- Update MONGO_URL in `.env` to your MongoDB Atlas connection string

### Issue 4: "Module not found" errors

```powershell
# Frontend
cd frontend
yarn install
# or
npm install

# Backend
cd backend
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

### Issue 5: "CORS error" when frontend calls backend

- Backend `.env` has `CORS_ORIGINS="*"` (allows all origins)
- If still failing, check frontend API URL matches backend URL

---

## **Build for Production**

### Frontend Build

```powershell
cd frontend
yarn build
# Creates optimized build in frontend/build/
```

### Backend Deployment

For production, use Gunicorn instead of development server:

```powershell
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 server:app
```

---

## **Useful Commands**

| Command | Purpose |
|---------|---------|
| `yarn start` | Start React dev server |
| `yarn build` | Build React for production |
| `yarn test` | Run tests |
| `python server.py` | Start FastAPI server |
| `pip install -r requirements.txt` | Install Python packages |
| `pip list` | List installed Python packages |
| `deactivate` | Exit virtual environment |

---

## **File Structure Quick Reference**

```
FRONTEND (React Components):
frontend/src/
├── components/      # All UI components
│   ├── hero.jsx
│   ├── navbar.jsx
│   ├── about.jsx
│   ├── projects.jsx
│   ├── skills.jsx
│   ├── experience.jsx
│   ├── testimonials.jsx
│   ├── contact.jsx
│   └── footer.jsx
├── data/           # Content & configuration
│   └── portfolio.js
├── App.js          # Main app component
└── index.css       # Tailwind styles

BACKEND (FastAPI):
backend/
├── server.py       # Main API server
├── .env            # Environment variables
└── requirements.txt # Python dependencies
```

---

## **Next Steps**

1. ✅ Customize `frontend/src/data/portfolio.js` with your information
2. ✅ Update component content (hero, about, projects, etc.)
3. ✅ Connect backend endpoints to frontend API calls
4. ✅ Build additional features as needed
5. ✅ Deploy to production (Vercel for frontend, Heroku/Railway for backend)

---

## **Need Help?**

- Check terminal error messages carefully
- Ensure all services are running (MongoDB, Backend, Frontend)
- Verify environment variables in `.env` files
- Check firewall/antivirus isn't blocking ports

Happy coding! 🎉
