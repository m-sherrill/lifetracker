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
    const dbContactsData = await Contacts.create(req.body);

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/contacts/login', async (req, res) => {
  try {
    const contactsData = await Contacts.findOne({ where: { email: req.body.email } });

    if (!contactsData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await contactsData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.contacts_id = contactsData.id;
      req.session.logged_in = true;
      
      res.json({ Contacts: contactsData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/contacts/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;