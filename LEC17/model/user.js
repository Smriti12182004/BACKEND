// user.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: String,
    password: String,
    blogs: [{
        type: mongoose.Types.ObjectId,
        ref: "BlogPost"
    }]
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
//populate function