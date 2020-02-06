const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");

//contact model

const Contact = require('../model/Contact');
const User = require("../model/User");

//@route GET me/contacts
//@desc Get all contacts
//@access Public

router.get('/', auth, async(req, res) => {

    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);

        Contact.find({userid: user.id})
            .sort({first: 1})
            .then(contact => res.json(contact))
        //res.json(user);
      } catch (e) {
        res.send({ message: "Error in Fetching user" });
      }

 
});

//@route POST me/contacts/add
//@desc Add a contact
//@access Public

router.post('/add', (req, res) => {


    const newContact = new Contact({
        first: req.body.first,
        last: req.body.last,
        phone: req.body.phone,
        note: req.body.note,
        userid: req.body.userid
    });

    console.log(req.body);

    newContact.save()
    .then(contact => res.json(contact))
    .catch(console.log);
    
});

//@route DELETE me/contacts/:id
//@desc Delete contact by Mongo ID
//@access Public

router.delete('/:id', (req, res) => {
    Contact.findById(req.params.id)
        .then(contact => contact.remove().then(()=> res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

//@route POST me/contacts/edit/:id
//@desc Edit a contact by Mongo ID
//@access Public

router.post('/edit/:id', (req, res) => {

    Contact.findById(req.params.id).then(contact => {

        var tempFirst = contact.first;

        if(contact.last != null)
            var tempLast = contact.last;
        else
            var tempLast = null;
        
        var tempPhone = contact.phone;

        if(contact.note != null)
            var tempNote = contact.note;
        else
            var tempNote = null;
        
        var tempUser = contact.userid;

        contact.first = req.body.first;
        contact.last = req.body.last;
        contact.phone = req.body.phone;
        contact.note = req.body.note;
        contact.userid = req.body.userid;

        if(req.body.first == null)
            contact.first = tempFirst;
        if(req.body.last == null)
            contact.last = tempLast;
        if(req.body.phone == null)
            contact.phone = tempPhone;
        if(req.body.note == null)
            contact.note = tempNote;
        if(req.body.userid == null)
            contact.userid = tempUser;


        contact.save()
            .then(() => res.json(contact))
            .catch(err => res.status(404).json(err));
    })
    .catch(err => status(404).json(err));
})

module.exports = router;
