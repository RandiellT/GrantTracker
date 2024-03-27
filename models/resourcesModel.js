//Adapted from Mongoose (n.d.)

//Importing mongoose 
const mongoose = require('mongoose');

//Creating new Schema using mongoose

const resourcesSchema = new mongoose.Schema({

	funderUsers: {
		type: Object,
		required: [true, 'There are no Funders.']
	},
	grantOffers: {
		type: Object,
		required: [true, 'There are no grants.']
	}
});

//Exporting model
module.exports = mongoose.model('resources', resourcesSchema);
