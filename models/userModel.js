//Adapted from 

//Importing packages needed
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Creating a new schema, adding error control and validation
const UserSchema = new mongoose.Schema({

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
        unique: [true, 'This username is already in use.'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password between 8-15 characters'],
        min: [8, 'The username and password must have 8-15 alphanumeric characters. Please re-enter the username and password.'],
        max: [15, 'The username and password must have 8-15 alphanumeric characters. Please re-enter the username and password.']
    },
    orgName: {
        type: String,
        required: [true, 'Please enter your organization name'], 
        max:150,
        unique: [true, 'This organization has a user account, please sign in.']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address'], 
        max: 150
    },
    registerDate: {
        type: Date,
        default: Date.now(),
    },

});

//Adapted from 
//Hashing passwords for users protection
// UserSchema.methods.hashPassword = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
// }
// UserSchema.methods.comparePassword = function (password, hash) {
//     return bcrypt.compareSync(password, hash)
// }

//Exporting model
module.exports = mongoose.model('Users', UserSchema);



