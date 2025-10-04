# 🏨 **Node Hotel Application**

The **Node Hotel Application** is a **Node.js-based system** built with the **Express.js framework** and **MongoDB (via Mongoose)**.
It manages **staff (persons)** and **menu items**, providing **CRUD (Create, Read, Update, Delete)** operations for both.

---

## 📌 **Features**

* 👨‍🍳 Manage staff (add, update, delete, filter by role).
* 🍽️ Manage menu items (add, update, delete, filter by taste).
* ⚡ RESTful API endpoints.
* 🛠️ Modular structure with routes & models.
* 💾 MongoDB integration via Mongoose.

---

## 🔗 **API Endpoints**

### 👤 <u>Persons</u>

* **Add a Person**
  `POST /person` → *Add staff details (name, role, etc.)*

* **Get All Persons**
  `GET /person` → *Retrieve all staff members*

* **Get Persons by Work Type**
  `GET /person/:workType` → *Filter staff by role (e.g., chef, waiter, manager)*

* **Update a Person**
  `PUT /person/:id` → *Update person details by ID*

* **Delete a Person**
  `DELETE /person/:id` → *Remove a person by ID*

---

### 🍴 <u>Menu Items</u>

* **Add a Menu Item**
  `POST /menu` → *Add dish details (name, price, taste, etc.)*

* **Get All Menu Items**
  `GET /menu` → *Retrieve all menu items*

* **Get Menu Items by Taste**
  `GET /menu/:taste` → *Filter menu by taste (sweet, spicy, sour)*

* **Update a Menu Item**
  `PUT /menu/:id` → *Update menu item details by ID*

* **Delete a Menu Item**
  `DELETE /menu/:id` → *Remove menu item by ID*

---

## 🗂️ **Data Models**

### 👤 *Person Model*

| Field     | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| `name`    | String | Person's name                |
| `age`     | Number | Person's age                 |
| `work`    | Enum   | Role (chef, waiter, manager) |
| `mobile`  | String | Contact number               |
| `email`   | String | Unique email                 |
| `address` | String | Residential address          |
| `salary`  | Number | Monthly salary               |

**Example**:

```json
{
  "name": "John Doe",
  "age": 30,
  "work": "waiter",
  "mobile": "123-456-7890",
  "email": "john@example.com",
  "address": "123 Main Street",
  "salary": 30000
}
```

---

### 🍴 *Menu Item Model*

| Field         | Type    | Description                           |
| ------------- | ------- | ------------------------------------- |
| `name`        | String  | Item name                             |
| `price`       | Number  | Item price                            |
| `taste`       | Enum    | Taste (sweet, spicy, sour)            |
| `is_drink`    | Boolean | Whether it’s a drink (default: false) |
| `ingredients` | Array   | List of ingredients                   |
| `num_sales`   | Number  | Sales count (default: 0)              |

**Example**:

```json
{
  "name": "Spicy Chicken Curry",
  "price": 12.99,
  "taste": "spicy",
  "is_drink": false,
  "ingredients": ["chicken", "spices", "vegetables"],
  "num_sales": 50
}
```

---

## ⚙️ **Installation**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Install Nodemon (for auto-restart)**

   ```bash
   npm install -g nodemon
   ```

---

## 📂 **Project Structure**

```
.
├── models/             # Database models
│   └── MenuItems.js
├── routes/             # Express routes
│   ├── personRoutes.js
│   └── menuItemsRoutes.js
├── db.js               # MongoDB connection setup
├── server.js           # Entry point
├── .env                # Environment variables
├── package.json
└── README.md
```

---

## 🔑 **Environment Variables**

Create a `.env` file in the project root:

```
PORT=3000
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>
```

⚠️ *Replace `<username>`, `<password>`, `<dbname>` with your MongoDB Atlas credentials.*

---

## 🚀 **Running the Project**

Start the development server:

```bash
nodemon server.js
```

Expected output:

```
✅ Connected to MongoDB server
✅ Server running at http://localhost:3000
```

---

## 🛠️ **API Summary**

### Root

* `GET /` → Welcome message

### Person Routes

* `GET /person`
* `POST /person`
* `PUT /person/:id`
* `DELETE /person/:id`

### Menu Routes

* `GET /menu`
* `POST /menu`
* `PUT /menu/:id`
* `DELETE /menu/:id`

---

## 📚 **Learning Notes**

* **Express.js** → Handles HTTP requests & APIs.
* **Mongoose** → Defines MongoDB schemas & models.
* **.env** → Keeps credentials safe.
* **Nodemon** → Auto-restarts on code changes.

---

## ✅ **Next Steps**

* 🔍 Learn deeper CRUD in MongoDB.
* 🔐 Add middleware (authentication, validation).
* 🌍 Deploy on **Render**, **Vercel**, or **Heroku**.

👉 Demo Deployment: [Node Hotel App on Render](https://hotels-owtk.onrender.com/)


Deploy your Node.js app to Render(https://hotels-owtk.onrender.com/), Vercel, or Heroku.
Deploy your MongoDb app to Mongodb Atlas(https://www.mongodb.com/products/platform/atlas-database?msockid=15c236e6bf7d6d440959254ebe0e6c83)
or (https://cloud.mongodb.com/v2/68336e5ebce7aa63bafa93b0#/metrics/replicaSet/68dd4780f6f7db011d6fc0ef/explorer/hotels/menuitems/find)

