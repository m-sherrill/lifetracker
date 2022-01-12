
const router = require('express').Router();

const { Notes, User, Todo, TodoItems, Contacts, Calendar } = require('../models')
const withAuth = require('../utils/auth')


//Homepage Route
router.get('/', async (req, res) => {

  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      raw: true
    });



    res.render('home', {
      users: userData,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log('errrrrr', err)
    res.status(500).json(err);
  }
});

//Notes Page Route
router.get('/notes', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Notes }],

      order: [
        [Notes, 'id', 'DESC'],
      ],

    });

    const users = userData.get({ plain: true });

    res.render('notes', {
      users,
      logged_in: true
    });
  } catch (err) {
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
        [Contacts, 'first_name', 'ASC'],
      ],
    });

    const users = userData.get({ plain: true });

    res.render('contacts', {
      users,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// calendar home route
router.get('/calendar', withAuth, async (req, res) => {
  try {

    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Calendar }],
    });

    const users = userData.get({ plain: true });

    res.render('calendar', {
      users,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
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


//todo route
router.get('/todo', withAuth, async (req, res) => { // the path to the /todos page with authorization

  try {
    const todoData = await User.findByPk(req.session.user_id, { // we search for the users model verses the todo/todo items model because we want the user to only see what they have done -- and not see what others have added. 
      attributes: { exclude: ['password'] }, // exclude password so the password information is not included in the returned object // include the todo and todo items information connected to the logged in user
      include: [{
        model: Todo,
        include: [{ model: TodoItems }]
      }],
    })

    const users = todoData.get({ plain: true }); // returns the information you searched for in a json friendly format
    res.render('todo', { // renders this information to the todo handlebars file
      todos: users.todos,
      // the whole object that you just looked for -- we can then take information from this object and render it to the page
      logged_in: true // the user has to be logged in to view this page or the items
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});


module.exports = router;

