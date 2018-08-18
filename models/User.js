const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    profileID: String,
    username: String,
    password: String,
    fullname: String,
    profilePic: String
});


module.exports = mongoose.model('User', userSchema);

