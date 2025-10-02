<----------🟢 Node.js + Express + MongoDB Backend Setup---------->
📌 Overview

This project is a simple backend setup using Node.js, Express.js, and MongoDB (via Mongoose).
It demonstrates:

Setting up an Express server

Connecting MongoDB to Node.js using Mongoose

Organizing routes and models for scalability

⚙️ Installation

Clone the repository

git clone https://github.com/your-username/your-repo.git
cd your-repo


Install dependencies

npm install


Install nodemon (for auto-restart)

npm install -g nodemon

📂 Project Structure
.
├── models/             # Database models (Mongoose schemas)
│   └── MenuItems.js
├── routes/             # Express routes
│   ├── personRoutes.js
│   └── menuItemsRoutes.js
├── db.js               # MongoDB connection setup
├── server.js           # Main entry point
├── .env                # Environment variables (MongoDB URI, PORT)
├── package.json
└── README.md

🔑 Environment Variables

Create a .env file in the root folder:

PORT=3000
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>


⚠️ Replace <username>, <password>, and <dbname> with your actual MongoDB Atlas credentials.

🚀 Running the Project

Start the server with:

nodemon server.js


You should see:

✅ Connected to MongoDB server
✅ Server running at http://localhost:3000

🛠️ API Endpoints
Root
GET /


➡️ Returns a welcome message.

Person Routes
GET    /person
POST   /person
PUT    /person/:id
DELETE /person/:id

Menu Items Routes
GET    /MenuItems
POST   /MenuItems
PUT    /MenuItems/:id
DELETE /MenuItems/:id

📚 Learning Notes

Express.js is used to handle HTTP requests and create REST APIs.

Mongoose is used to connect Node.js with MongoDB and define schemas.

.env keeps your MongoDB credentials safe instead of hardcoding them in code.

Nodemon auto-restarts the server when code changes.

✅ Next Steps

Learn about CRUD operations in MongoDB.

Implement middleware (authentication, validation, logging).

Deploy your Node.js app to Render(https://hotels-owtk.onrender.com/), Vercel, or Heroku.
Deploy your MongoDb app to Mongodb Atlas(https://www.mongodb.com/products/platform/atlas-database?msockid=15c236e6bf7d6d440959254ebe0e6c83)

