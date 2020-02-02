const express = require('express');
const router = express.Router();

//contact model

const Contact = require('../model/Contact');

//@route GET contacts
//@desc Get all contacts
//@access Public

router.get('/', (req, res) => {
    Contact.find()
    .sort({last: -1})
    .then(contact => res.json(contact))
});

//@route POST contacts/add
//@desc Add a contact
//@access Public

router.post('/add', (req, res) => {


    const newContact = new Contact({
        first: req.body.first,
        last: req.body.last,
        phone: req.body.phone,
        note: req.body.note
    });

    console.log(req.body);

    newContact.save()
    .then(contact => res.json(contact))
    .catch(console.log);
    
});

//@route DELETE contacts/:id
//@desc Get all contacts
//@access Public

router.delete('/:id', (req, res) => {
    Contact.findById(req.params.id)
        .then(contact => contact.remove().then(()=> res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;