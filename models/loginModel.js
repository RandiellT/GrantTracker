const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userID",
        required: true,
    },
    userType: {
        type: String,
        enum: {
            values: ['general', 'funder', 'admin'],
            message: '{VALUE} is not supported'
        },
        required: [true, 'Please select a user type.']
    },  
    username: {
        type: String,
        required: [true, 'Please enter a username between 8-15 characters'],
        min: [8, 'The username and password must have 8-15 alphanumeric characters. Please re-enter the username and password.'],
        max: [15, 'The username and password must have 8-15 alphanumeric characters. Please re-enter the username and password.'],
        unique: [true, 'This username is already in use.']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password between 8-15 characters'],
        min: [8, 'The username and password must have 8-15 alphanumeric characters. Please re-enter the username and password.'],
        max: [15, 'The username and password must have 8-15 alphanumeric characters. Please re-enter the username and password.']
    },
});

module.exports = mongoose.model('Login', LoginSchema);