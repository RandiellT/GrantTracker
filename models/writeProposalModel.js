//Importing mongoose 
const mongoose = require('mongoose');

//Creating new Schema using mongoose

const writeProposalSchema = new mongoose.Schema({

    grantName: {
        type: String,
        required: [true, 'Please select grant name and funding agency.']
    },  
    orgName: {
        type: String,
        required: [true, 'Please select grant name and funding agency.']
    },
    addField: {
        type: String,
        required: [true, 'This field cannot be empty.']
    },
    submissionDate: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('write.proposal', writeProposalSchema);