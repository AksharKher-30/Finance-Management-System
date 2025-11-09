<div align="center">

# Finance Management System (MERN)

Track income and expenses, visualize trends, and manage your personal or small-business finances. Built with the MERN stack (MongoDB, Express, React, Node).

</div>

## ✨ Features

- Dashboard with table and analytics views
- Add, edit, delete transactions (income/expense, categories, date, reference, description)
- Date-range and type filters (last 7/30/365 days or custom)
- Category-wise breakdown with progress visuals
- Responsive UI (Ant Design + custom styles)
- Dev mode: guest login (no credentials) for quick access

## 🧱 Project structure

```
Finance-Management-System/
├── server.js                 # Express app entry
├── dbConnect.js              # Mongoose connection (dotenv)
├── routes/
│   ├── usersRoute.js         # Login (guest), register disabled in dev
│   └── transactionsRoute.js  # CRUD endpoints for transactions
├── models/
│   ├── User.js               # User schema (kept for future auth)
│   └── Transaction.js        # Transaction schema
├── client/                   # React app (CRA)
│   ├── src/
│   │   ├── pages/            # Home, Login
│   │   ├── components/       # Layout, Analytics, Modals, Spinner
│   │   └── resources/        # CSS & assets
│   └── package.json
└── package.json              # Root scripts for server/client
```

## ⚙️ Tech stack

- Backend: Node.js, Express, Mongoose, Moment
- Frontend: React (CRA), Ant Design, Axios, React Router
- Database: MongoDB (Atlas or local)

## 🔧 Setup

### 1) Clone and install

```bash
git clone <your-repo-url> Finance-Management-System
cd Finance-Management-System

# install root deps (server)
npm install

# install client deps
cd client && npm install && cd ..
```

### 2) Configure environment

Create a `.env` in the project root:

```ini
MONGO_URI="mongodb+srv://<username>:<password>@<cluster-id>.mongodb.net/finance_management?retryWrites=true&w=majority&appName=<appName>"
DB_NAME=finance_management
PORT=5001
```

Notes:
- For MongoDB Atlas: whitelist your IP and URL‑encode special characters in the password.
- For local MongoDB: use `MONGO_URI=mongodb://127.0.0.1:27017/finance_management`.

### 3) Run (both frontend and backend)

From the project root, you can run either:

```bash
# start backend only
npm start

# or run both servers together (requires "concurrently")
npm run dev:all
```

What to expect:
- Backend: http://localhost:5001 → "API is running"
- Health: http://localhost:5001/health/db → `{ "db": "connected" }`
- Frontend: http://localhost:3000

The client is configured with a proxy to the backend (see `client/package.json`).

## 🔐 Authentication (dev mode)

To speed up testing, the app uses a guest login:
- `POST /api/users/login` returns a static guest user.
- The Login page has a single button (“Enter Dashboard”) that sets a guest profile in `localStorage` and navigates to `/`.

You can later re-enable real registration and credential-based login by restoring the original routes/UI.

## 📡 API overview

Base URL: `http://localhost:5001/api`

- `POST /users/login` → returns guest user (dev mode)
- `POST /users/register` → 403 (disabled in dev)
- `POST /transactions/add-transaction` → add new transaction
- `POST /transactions/edit-transaction` → update transaction
- `POST /transactions/delete-transaction` → delete transaction
- `POST /transactions/get-all-transactions` → list user’s transactions with filters

Request bodies are JSON. Transaction payloads include:

```json
{
	"amount": 1000,
	"type": "income", // or "expense"
	"category": "Other Income",
	"reference": "INV-001",
	"description": "Freelance work",
	"date": "2025-11-01",
	"userid": "guest-user-id"
}
```

## 🧪 Common issues

- Backend port already in use: change `PORT` in `.env` and update `client/package.json` proxy if needed.
- Mongo auth failures:
	- Ensure IP is whitelisted in Atlas.
	- URL‑encode special characters in the password.
	- Set `DB_NAME=finance_management` or include DB path in the URI.
- Proxy ECONNREFUSED in the client: start backend first, then restart client; or use `npm run dev:all`.

## 📜 Scripts

Root (`package.json`):
- `npm start` → start backend (Express)
- `npm run dev` → start backend with nodemon
- `npm run dev:server` → nodemon server only
- `npm run dev:client` → start React app only
- `npm run dev:all` → run backend and frontend together (concurrently)

Client (`client/package.json`):
- `npm start` → start React dev server (proxy to backend)
- `npm run build` → production build

## 🛡️ License

MIT — feel free to use, modify, and distribute.

## 🙌 Acknowledgements

- Ant Design for UI components
- Create React App tooling
- MongoDB Atlas free tier for easy database hosting
