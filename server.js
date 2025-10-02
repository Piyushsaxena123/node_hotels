// console.log("Short Hand for writing a function = ");

// function add(a,b){
//     return a+b;
// }
// const add = function(a,b){
//     return a+b;
// }
// var add = (a,b) => {return a+b};
// var add = (a,b) => a+b;
// var result = add(123,4);
// console.log(result);
// (function(){
//     console.log("Piyush");
// })();

const express = require('express')
const app = express();
const db = require('./db');

 require('dotenv').config(); // Load environment variables from .env file

 const bodyParser = require('body-parser');
 app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;


const MenuItems = require('./models/MenuItems');
app.get('/',function(req,res){
    res.send('Welcome to  my hotel... How i can help you ? We have list of menus')
})




//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuItemsRoutes');

// Use the router files
app.use('/person',personRoutes); // localhost:3000/api/person
app.use('/MenuItems',menuRoutes); // localhost:3000/api/menu


app.listen(PORT,()=>{
    console.log('listening on port 3000');
    //    console.log(`✅ Server running at http://localhost:${PORT}`)
}) 

