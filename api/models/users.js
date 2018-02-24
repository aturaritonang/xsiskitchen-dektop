const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: String,
    password: String,
    fullName: String
});

module.exports = mongoose.model('users', userSchema);