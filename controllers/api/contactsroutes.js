const router = require('express').Router();
const { Contacts } = require('../../models');

// Get all Contacts
router.get('/', async (req, res) => {
  try {
      const contactsData = await Contacts.findAll(
          );
          console.log(contactsData)
      res.status(200).json(contactsData);
  } catch (err) {
      console.log(err)
      res.status(500).json(err);
  }
});


// Post New Contact Associated with Specific User
router.post('/', async (req, res) => {
  try {
    const newContact = await Contacts.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      email: req.body.email,
      notes: req.body.notes,
     user_id: req.session.user_id,
   });
    console.log(newContact)
    res.status(200).json(newContact);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a Contact
router.put('/:id', async (req, res) => {
  try {
     const contactData = await Contacts.update(
       {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email,
        notes: req.body.notes,
        user_id: req.session.user_id,
       },
       {
         where: {
           id: req.params.id,
         },
       }
     )
     res.json(contactData);
   }
   catch {
     console.log(err)
     res.status(500).json(err);
   }
 });
 
module.exports = router;