const mongoose = require('../db');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports.User = mongoose.model('User', userSchema);