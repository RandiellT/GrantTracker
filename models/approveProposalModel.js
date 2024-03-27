//Adapted from Mongoose (n.d.)

//Importing mongoose 
const mongoose = require('mongoose');

//Creating new Schema using mongoose

const approveProposalSchema = new mongoose.Schema({

	proposalName: {
		type: String,
        required: true
	},
    submittedBy: {
		type: String,
        required: true
	},
    status: {
		type: String,
		enum: {
            values: ['Approved', 'Disapproved', 'Please review this proposal and resubmit.'],
            message: '{VALUE} is not supported'
        },
		required: [true, 'This field cannot be empty.']
	},
	comments: {
		type: String,
		required: [true, 'This field cannot be empty.']
	},
    submissionDate: {
		type: String, 
        required: true
	},
});

//Exporting model
module.exports = mongoose.model('approve.proposals', approveProposalSchema );