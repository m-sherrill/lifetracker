const Todo = require('./todo.js')
const TodoItems = require('./todoItems.js')
const Notes = require('./Notes.js');
const Calendar = require('./Calendar.js')
const Contacts = require('./Contacts.js')
const User = require('./User.js')


// Todo list connection points
User.hasMany(Todo, {
  foreignKey: 'user_id',

});

Todo.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(TodoItems, {
  foreignKey: 'user_id'
})

TodoItems.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Todo.hasMany(TodoItems, {
  foreignKey: 'todo_id'
})

TodoItems.belongsTo(Todo, {
  foreignKey: 'todo_id',
  onDelete: 'CASCADE'
})

// Notes Connection Points

User.hasMany(Notes, {
  foreignKey: 'user_id',

});

Notes.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


// Connecting up the contacts

User.hasMany(Contacts, {
  foreignKey: 'user_id',

});

Contacts.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// connection for calendar
User.hasMany(Calendar, {
  foreignKey: 'user_id',

});

Calendar.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});



module.exports = { Todo, TodoItems, Notes, Contacts, User, Calendar };
