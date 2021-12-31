
const router = require('express').Router();
const { Notes, User, NoteItems, Todo, TodoItems, Contacts, ContactsInfo } = require('../models')
const withAuth = require('../utils/auth')


//Homepage Route
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
    });

    const users = userData.map((user) => user.get({ plain: true }));

    res.render('home', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Notes Page Route
router.get('/notes', withAuth, async (req, res) => {
  try {
    const noteData = await Notes.findAll()
    const notes = noteData.map((note) => note.get({ plain: true }))
    console.log(notes)
    res.render('notes', { notes,
      logged_in: req.session.logged_in, });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Contact Routes 
router.get('/contacts', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Contacts }],

      order: [
        [ Contacts, 'first_name', 'ASC' ], 
      ],
    });

    const users = userData.get({ plain: true });
    console.log(users)

    res.render('contacts', {
      users,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/calendar', withAuth, async (req, res) => {

    res.render('calendar', { logged_in: req.session.logged_in });
  
});

// Login Route
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

