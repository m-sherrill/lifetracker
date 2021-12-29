
const router = require('express').Router();
const { Notes, User, NoteItems } = require('../models')
const withAuth = require('../utils/auth')


router.get('/', async (req, res) => {
  try {
    res.render('home');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/notes', async (req, res) => {
  try {
    const noteData = await Notes.findAll()
    const notes = noteData.map((project) => project.get({ plain: true }))
    console.log(notes)
    res.render('notes', { notes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Contacts, Comment }],
    });

    const users = userData.get({ plain: true });
    console.log(users)

    res.render('dashboard', {
      users,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

