const mongoose = require('mongoose');

// Define the MpngoDb connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' // Replace 'mydatabase' with your databse name

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

// Get the default connection
// Mongoose maintain a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connections

db.on('connected',() => {
    console.log('Connected to MongoDB server');
});

db.on('error',() => {
    console.log('error to MongoDB server');
});

db.on('disconnected',() => {
    console.log('MongoDB server disConnected');
});

// Export the database connection
module.exports = db;






// const express = require('express');
// const db = require('./db');  // Import your db.js file

// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON
// app.use(express.json());

// // Test route
// app.get('/', (req, res) => {
//     res.send('Hello! Express + MongoDB is working 🚀');
// });

// // Example route for hotels (you can add schema/models later)
// app.get('/hotels', (req, res) => {
//     res.json({ message: 'Hotels endpoint working' });
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`✅ Server running at http://localhost:${PORT}`);
// });
