const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }


    // phonenumber: {
    //     type: String,
    //     required: false
    // },
    // location: {
    //     type: false,
    //     required: true
    // }
})

const User = mongoose.model('employee', UserSchema);
module.exports = User;