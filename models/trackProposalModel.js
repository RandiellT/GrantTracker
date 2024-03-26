//Importing mongoose 
const mongoose = require('mongoose');

//Creating new Schema using mongoose

const trackProposalSchema = new mongoose.Schema({

	proposalStatus: {
		type: Object,
		required: [true, 'There are no grant proposals to track.']
	}
});

//Exporting model
module.exports = mongoose.model('track.proposal', trackProposalSchema);