//Adapted from Mongoose (n.d.)

//Importing mongoose 
const mongoose = require('mongoose');

//Creating new Schema using mongoose

const reviewedReportsSchema = new mongoose.Schema({

	reviewedReports: {
		type: Object,
		required: [true, 'There are no reviewed reports.']
	}
});

//Exporting model
module.exports = mongoose.model('reviewed.reports', reviewedReportsSchema);