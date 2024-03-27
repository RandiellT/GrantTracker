//Taken from Kumar (2022)
//Only a few modications were made for this to function.

//Importing the mongoose model
const resourcesModel= require('../models/resourcesModel');
const userModel = require('../models/userModel')
const offerGrantsModel= require('../models/offerGrantsModel');
    
//Routing using express
let router = require("express").Router();

//Using CRUD Operations as Rest APIs for routing 

//Creation of post method router


router.post('/post', async (req, res) => {
    try {
        const offers = await offerGrantsModel.find();
        const funders = await userModel.find({userType: "funder"}, {orgName:true, _id:false});

        const result = new resourcesModel({
                funderUsers: funders,
                grantOffers: offers
        })
        res.status(200).json(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Creation of get by usertype router

router.get('/getFunders', async (req, res) => {
    try{
        const data = await userModel.find({userType: "funder"}, {orgName:true, _id:false});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/getOffers', async (req, res) => {
    try{
        const data = await offerGrantsModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Exporting router 
module.exports = router;




//Might need for future updates

//Creation of post method router

// router.post('/post', async (req, res) => {
//     const data = new resourcesModel({
//         funderUsers: req.body.funderUsers,
//         grantOffers: req.body.grantOffers,
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({message: error.message})
//     }
// })

// //Creation of get method router

// router.get('/getAll', async (req, res) => {
//     try{
//         const data = await resourcesModel.find();
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

// //Creation of get by Object ID method router

// router.get('get/:id', async (req, res) => {
//     try{
//         const data = await resourcesModel.findById(req.params.id);
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

// //Creation of update by Object ID method router

// router.patch('/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updatedData = req.body;
//         const options = { new: true };

//         const result = await resourcesModel.findByIdAndUpdate(
//             id, updatedData, options
//         )

//         res.send(result)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

// //Creation of delete by Object ID method router

// router.delete('/delete/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = await resourcesModel.findByIdAndDelete(id)
//         res.send(`This ${data} has been deleted.`)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

// router.post('/post', async (req, res) => {
//     try {
//         const offers = await offerGrantsModel.find();
//         const funders = await userModel.find({userType: "funder"}, {orgName:true, _id:false});

//         const result = new resourcesModel({
//                 funderUsers: funders,
//                 grantOffers: offers
//         })
        
//         const dataToSave = await result.save();
//         res.status(200).json(dataToSave)
    
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })
