const mongoose = require('mongoose');

// Define the Person schema
const PersonSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    age : {
        type : Number,
        
    },
    work : {
        type : String,
        enum : ['chef','waiter','manager'],
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    address : {
        type : String
    },
    salary : {
        type : String,
        required : true
    }
});

// Create Person Model
const Person = mongoose.model('Person',PersonSchema);
module.exports = Person;

