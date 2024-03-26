//Importing the mongoose model
const reviewedReportsModel= require('../models/reviewedReportModel');
    
//Routing using express
let router = require("express").Router();

//Using CRUD Operations as Rest APIs for routing 

//Creation of post method router

router.post('/post', async (req, res) => {
    const data = new reviewedReportsModel({
        reviewed: req.body.reviewed,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Creation of get method router

router.get('/getAll', async (req, res) => {
    try{
        const data = await reviewedReportsModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Creation of get by Object ID method router

router.get('/get/:id', async (req, res) => {
    try{
        const data = await reviewedReportsModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Creation of update by Object ID method router

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await reviewedReportsModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Creation of delete by Object ID method router

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await reviewedReportsModel.findByIdAndDelete(id)
        res.send(`This ${data} has been deleted.`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Exporting router 
module.exports = router;
