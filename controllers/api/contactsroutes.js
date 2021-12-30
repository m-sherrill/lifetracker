const router = require('express').Router();
const { Contacts } = require('../../models');


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

module.exports = router;