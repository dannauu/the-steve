const mongoose = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const customerSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    cell: {
        type: Number,
        required: true,
    },
    zipCode: {
        type: Number,
        required: true,
    },

    // the three below are the customers rating
    communicationRating: {
        type: Number,
        required: true,
    },
    picky: {
        type: Number,
        required: true,
    },
    payOnTime: {
        type: Number,
        required: true,
    }


});

const CustomerModel = mongoose.model('customers', customerSchema)

module.exports = CustomerModel;
