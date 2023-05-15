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

const User2 = mongoose.model('employer', UserSchema);
module.exports = User2;