const express = require('express');
const router = express.Router();
const MenuItems = require('../models/MenuItems');

router.post('/',async (req,res)=>{
try{
    const data = req.body;
    const newMenuItems = new MenuItems(data);
    const response = await newMenuItems.save();
  console.log('Data Saved successfully');
        res.status(200).json(response); // Send the saved document as a response
    }catch(error){
        console.log(error);
        res.status(500).json({error : 'Internal Server Error'});
    }
})


// GET method to get the Menu Item data 
router.get('/',async (req,res)=>{
    try{
        const data = await MenuItems.find(); // Fetch all Person documents from the database
        console.log('Data fetched Successfully');
        res.status(200).json(data); // Send the fetched data as a response
    }catch(error){
        console.log(error);
        res.status(500).json({error : 'Internal Server Error'});
    }
})

module.exports = router;
