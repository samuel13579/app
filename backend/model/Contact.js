const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema ({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    notes: {
        type: String
    }
})


module.exports = Contact = mongoose.model('contact', ContactSchema);