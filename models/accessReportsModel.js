//Importing mongoose 
const mongoose = require('mongoose');

//Creating new Schema using mongoose

const accessReportsSchema = new mongoose.Schema({

	submittedReport: {
		type: Object,
		required: [true, 'No reports available.']
	},
	reportName: {
		type: String,
        required: true
	},
    submittedBy: {
		type: String
	},
	comments: {
		type: String
	},
    status: {
		type: String, 
		enum: {
            values: ['approved', 'disapproved'],
            message: '{VALUE} is not supported. Please use "approved" or "disapproved".'
        },
        required: true
	},
    submissionDate: {
		type: String, 
        required: true
	},
});

//Exporting model
module.exports = mongoose.model('access.reports', accessReportsSchema);