const express = require('express');
const router = express.Router();

//contact model

const Contact = require('../model/Contact');

//@route GET contacts
//@desc Get all contacts
//@access Public

router.get('/', (req, res) => {
    Contact.find()
    .sort({last: 1})
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
//@desc Delete contact by Mongo ID
//@access Public

router.delete('/:id', (req, res) => {
    Contact.findById(req.params.id)
        .then(contact => contact.remove().then(()=> res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

//@route POST contacts/edit/:id
//@desc Edit a contact by Mongo ID
//@access Public

router.post('/edit/:id', (req, res) => {
    Contact.findById(req.params.id).then(contact => {
        contact.first = req.body.first;
        contact.last = req.body.last;
        contact.phone = req.body.phone;
        contact.note = req.body.note;

        contact.save()
            .then(() => res.json(contact))
            .catch(err => res.status(404).json(err));
    })
    .catch(err => status(404).json(err));
})

module.exports = router;