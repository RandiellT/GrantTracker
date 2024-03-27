//Adapted from Mongoose (n.d.)

//Importing mongoose 
const mongoose = require('mongoose');

//Creating new Schema using mongoose

const monitorAwardSchema = new mongoose.Schema({

	awardName: {
		type: String,
        required: true
	},
    fundedBy: {
		type: String,
        required: true
	},
    awardedDate: {
		type: String,
		required: true
	},
    awardUpdates: {
		type: String,
	},
});

//Exporting model
module.exports = mongoose.model('monitor.award', monitorAwardSchema);