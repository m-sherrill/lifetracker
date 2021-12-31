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


// Get Contact by ID
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    console.log(req.params.id)
    const contactData = await Contacts.findByPk(req.params.id);
    res.status(200).json(contactData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
})


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
    const contactData = await Contacts.update(req.body,
      {
        where: {
          id: req.params.id,
        },
      }
    )
    res.json(contactData);
  }
  catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const contactData = await Contacts.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(contactData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});


module.exports = router;