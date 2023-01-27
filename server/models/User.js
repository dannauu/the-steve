const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:
    {
        type: String,
        required: 'Please enter a valid email',
    },
    password: {
        type: String,
        required: 'Please enter a valid password',
    }
});

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel;
