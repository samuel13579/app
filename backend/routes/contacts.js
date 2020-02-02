const express = require('express');
const router = express.Router();

//contact model

const Contact = require('../model/Contact');

//@route GET api/contacts
//@desc Get all contacts
//@access Public

router.get('/', (req, res) => {
    Contact.find()
    .sort({last: -1})
    .then(contact => res.json(contact))
});

//@route POST api/contacts
//@desc Create A Post
//@access Public

router.post('/', (req, res) => {


    const newContact = new Contact({
        first: req.body.first,
        last: req.body.last,
        phone: req.body.phone,
        note: req.body.note
    });

    console.log(req.body);

    newContact.save().then(contact => res.json(contact))
    .catch(console.log);
    
});

module.exports = router;