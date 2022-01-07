
const router = require('express').Router();
const { Notes, User, Todo, TodoItems, Contacts, Calendar } = require('../models')
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
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Notes }],

      order: [
        [Notes, 'id', 'DESC'],
      ],
    });

    const users = userData.get({ plain: true });
    console.log(users)

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
    console.log(users)

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
    console.log("in calendar route!!!")
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Calendar }],
    });

    const users = userData.get({ plain: true });
    console.log(users)

    res.render('calendar', {
      users,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// todo route
router.get('/todos', withAuth, async (req, res) => { // the path to the /todos page with authorization
  try {
    const userData = await User.findByPk(req.session.user_id, { // we search for the users model verses the todo/todo items model because we want the user to only see what they have done -- and not see what others have added. 
      attributes: { exclude: ['password'] }, // exclude password so the password information is not included in the returned object
      include: [{ model: Todo, TodoItems }], // include the todo and todo items information connected to the logged in user

      order: [
        [Todo, 'id', 'DESC'], // this I let for desc order based on the id, newest todo lists will populate to the top
      ],
    });

    const users = userData.get({ plain: true }); // returns the information you searched for in a json friendly environment
    console.log(users)

    res.render('todo', { // renders this information to the todo handlebars file
      users, // the whole object that you just looked for -- we can then take information from this object and render it to the page
      logged_in: true // the user has to be logged in to view this page or the items
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
//todo
// router.get('/toDo',withAuth, async (req, res) => {
//   try {
//     let todos;
//     let Items;
//     const todoData = await Todo.findAll({ });
//     const todoItemsData = await TodoItems.findAll({});

//     if(todoData){
//       todos = todoData.get({ plain: true });
//     } 
    
//     if(todoItemsData) {
//       Items = todoItemsData.get({ plain: true });
//     }

//     console.log(todos, Items)

//     res.render('todo', {
//       todos, 
//       Items,
//       logged_in: true
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/toDo', withAuth, async (req, res) => { // the path to the /todos page with authorization
  try {
    const todoData = await User.findByPk(req.session.user_id, { // we search for the users model verses the todo/todo items model because we want the user to only see what they have done -- and not see what others have added. 
      attributes: { exclude: ['password'] }, // exclude password so the password information is not included in the returned object
      include: [{ model: Todo, TodoItems }], // include the todo and todo items information connected to the logged in user

      order: [
        [Todo, 'id', 'DESC'], // this I let for desc order based on the id, newest todo lists will populate to the top
      ],
     
    });

    const todos = todoData.get({ plain: true }); // returns the information you searched for in a json friendly format
    console.log('TODOS LISTS FOR USERS!!',todos)

    res.render('todo', { // renders this information to the todo handlebars file
      todos: todos.todos, // the whole object that you just looked for -- we can then take information from this object and render it to the page
      logged_in: true // the user has to be logged in to view this page or the items
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

