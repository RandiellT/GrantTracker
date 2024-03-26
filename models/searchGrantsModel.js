//Importing mongoose 
const mongoose = require('mongoose');

//Creating new Schema using mongoose

const searchGrantsSchema = new mongoose.Schema({

	grantOffers: {
		type: Object,
        ref:"grantOfferID",
		required: [true, 'There are no results in this search.']
	},

});

//Exporting model
module.exports = mongoose.model('search.grants', searchGrantsSchema);
