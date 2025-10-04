Node Hotel Application
The Node Hotel application is a Node.js-based system developed using the Express.js framework, with MongoDB as the chosen database. This application manages information related to persons (staff) and menu items. It exposes specific endpoints to handle CRUD (Create, Read, Update, Delete) operations for both persons and menu items.

Endpoints
Persons
Add a Person:

Endpoint: POST /person
Description: Adds a person to the system with details such as name, role, etc.
Get All Persons:

Endpoint: GET /person
Description: Retrieves a list of all persons in the system.
Get Persons by Work Type:

Endpoint: GET /person/:workType
Description: Retrieves a list of persons based on their work type (e.g., chef, waiter, manager).
Update a Person:

Endpoint: PUT /person/:id
Description: Updates the details of a specific person identified by their ID.
Delete a Person:

Endpoint: DELETE /person/:id
Description: Deletes a person from the system based on their ID.
Menu Items
Add a Menu Item:

Endpoint: POST /menu
Description: Adds a menu item to the system with details such as name, price, taste, etc.
Get All Menu Items:

Endpoint: GET /menu
Description: Retrieves a list of all menu items in the system.
Get Menu Items by Taste:

Endpoint: GET /menu/:taste
Description: Retrieves a list of menu items based on their taste (e.g., sweet, spicy, sour).
Update a Menu Item:

Endpoint: PUT /menu/:id
Description: Updates the details of a specific menu item identified by its ID.
Delete a Menu Item:

Endpoint: DELETE /menu/:id
Description: Deletes a menu item from the system based on its ID.
Data Models
Person
The Person data model represents information about staff members in the hotel.

Fields:

name: String (Person's name)
age: Number (Person's age)
work: Enum (Role in the hotel, such as chef, waiter, manager)
mobile: String (Person's mobile number)
email: String (Person's email address, unique)
address: String (Person's address)
salary: Number (Person's salary)
Example:

{
  "name": "John Doe",
  "age": 30,
  "work": "waiter",
  "mobile": "123-456-7890",
  "email": "john@example.com",
  "address": "123 Main Street",
  "salary": 30000
}

Menu Item
The MenuItem data model represents information about menu items available in the hotel.

Fields:

name: String (Item's name)
price: Number (Item's price)
taste: Enum (Item's taste, such as sweet, spicy, sour)
is_drink: Boolean (Indicates if the item is a drink, default is false)
ingredients: Array of Strings (List of ingredients, default is an empty array)
num_sales: Number (Number of sales for the item, default is 0)
Example:

{
  "name": "Spicy Chicken Curry",
  "price": 12.99,
  "taste": "spicy",
  "is_drink": false,
  "ingredients": ["chicken", "spices", "vegetables"],
  "num_sales": 50
}

Usage
Install Dependencies:
npm install
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
or (https://cloud.mongodb.com/v2/68336e5ebce7aa63bafa93b0#/metrics/replicaSet/68dd4780f6f7db011d6fc0ef/explorer/hotels/menuitems/find)

