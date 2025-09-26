const express = require('express')
const router = express.Router();
const Person = require('./../models/person');

// POST route to add a Person
router.post('/',async (req,res)=>{
    try{
        const data = req.body; // Assuming req.body contains the person data 
        // Create a new Person document using the Moongoose model
        const newPerson = new Person(data);

        // Save the new Person document to the database
        const response = await newPerson.save();
        console.log('Data Saved successfully');
        res.status(200).json(response); // Send the saved document as a response
    }catch(error){
        console.log(error);
        res.status(500).json({error : 'Internal Server Error'});
    }
})
// GET method to get the person data
router.get('/',async (req,res)=>{
    try{
        const data = await Person.find(); // Fetch all Person documents from the database
        console.log('Data fetched Successfully');
        res.status(200).json(data); // Send the fetched data as a response
    }catch(error){
        console.log(error);
        res.status(500).json({error : 'Internal Server Error'});
    }
})

router.get('/:workType',async (req,res)=>{
     try{
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error : 'Invalid work type'});
        }
     }catch(error){
        console.log(error);
        res.status(500).json({error : 'Internal Server Error'});
     }
    })
router.put('/:id',async (req,res) =>{
    try{
        const personId = req.params.id; // Extract the id from the URL parameter
        const updatePersonData = req.body; // Update data for the person

        const response = await Person.findByIdAndUpdate(personId,updatePersonData, {
            new : true, // Return the updated document
            runValidators : true, // Run Mongoose validation
        })
        
        if(!response){
            return res.status(404).json({error : 'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
})

router.delete('/:id',async (req,res) => {
    try{
        const personId = req.params.id;
        // Assuming you have a personal model
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error : 'Person not found' });
        }
        console.log('data delete');
        res.status(200).json({message : 'person Deleted Successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
module.exports = router;
