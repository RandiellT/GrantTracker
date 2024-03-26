//Importing mongoose 
const mongoose = require('mongoose');

//Creating new Schema using mongoose

const offerGrantsSchema = new mongoose.Schema({

    offerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "grantOfferID",
        required: true,
    },
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

module.exports = mongoose.model('offer.grants', offerGrantsSchema);