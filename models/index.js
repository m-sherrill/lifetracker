const Todo = require('./Todo')
const TodoItems = require('./TodoItems')
const Notes = require('./Notes');
const NoteItems = require('./NoteItems')
const Contacts = require('./Contacts')
const User = require('./User')


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

User.hasMany(NoteItems, {
  foreignKey: 'user_id'
})

NoteItems.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Notes.hasMany(NoteItems, {
  foreignKey: 'note_id'
})

NoteItems.belongsTo(Notes, {
  foreignKey: 'note_id',
  onDelete: 'CASCADE'
})

// Connecting up the contacts

User.hasMany(Contacts, {
  foreignKey: 'user_id',

});

Contacts.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});




module.exports = { Todo, TodoItems, Notes, NoteItems, Contacts, User };
