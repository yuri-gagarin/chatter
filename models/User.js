const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    profileID: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: false
    },
    profilePic: String
});

module.exports = mongoose.model('User', userSchema);

