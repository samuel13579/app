const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema ({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    notes: {
        type: String
    },
    user: {
        type: String,
        requiered: true
    }
})


module.exports = Contact = mongoose.model('contact', ContactSchema);