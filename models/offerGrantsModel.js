//Adapted from Mongoose (n.d.)

//Importing mongoose 
const mongoose = require('mongoose');

//Creating new Schema using mongoose

const offerGrantsSchema = new mongoose.Schema({

    grantName: {
        type: String,
        required: true
    },  
    orgName: {
        type: String,
        required: true, 
    },
    requirements: {
        type: String, 
        required: true
    },
    documentsRequired: {
        type: String, 
        required: true 
    },
    details: {
        type: String, 
        required: true 
    },
    deadline: {
        type: String,
        required: true
    },
    uploadDate: {
        type: String,
        required: true
    }
});

//Exporting model
module.exports = mongoose.model('offer.grants', offerGrantsSchema);