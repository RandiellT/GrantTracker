//Adapted from Mongoose (n.d.)

//Importing mongoose 
const mongoose = require('mongoose');

//Creating new Schema using mongoose

const submitReportsSchema = new mongoose.Schema({

	reportName: {
		type: String,
		required: [true, 'Please add the report name.']
	},
    submissionDate: {
		type: String,
		required: true
	},
});

//Exporting model
module.exports = mongoose.model('submit.reports', submitReportsSchema);