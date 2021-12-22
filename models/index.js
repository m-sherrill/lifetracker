const Todos = require('./Todo')
const TodoItems = require('./TodoItems')
const Notes = require('./Notes');
const NoteItems = require('./NoteItems')
const Contacts = require('./Contacts')
const ContactsInfo = require('./ContactsInfo')
const User = require('./User')


// Todo list connection points
// User.hasMany(Todo, {
//   foreignKey: 'user_id',

// });

// Todo.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// User.hasMany(TodoItems, {
//   foreignKey: 'user_id'
// })

// TodoItems.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// })

// Todo.hasMany(TodoItems, {
//   foreignKey: 'blog_id'
// })

// TodoItems.belongsTo(Todo, {
//   foreignKey: 'blog_id',
//   onDelete: 'CASCADE'
// })

// Notes Connection Points

// User.hasMany(Notes, {
//   foreignKey: 'user_id',

// });

// Notes.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// User.hasMany(NoteItems, {
//   foreignKey: 'user_id'
// })

// NoteItems.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// })

// Notes.hasMany(NoteItems, {
//   foreignKey: 'blog_id'
// })

// NoteItems.belongsTo(Notes, {
//   foreignKey: 'blog_id',
//   onDelete: 'CASCADE'
// })

//Connecting up the contacts

User.hasMany(Contacts, {
  foreignKey: 'user_id',

});

Contacts.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(ContactsInfo, {
  foreignKey: 'user_id'
})

ContactsInfo.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Contacts.hasMany(ContactsInfo, {
  foreignKey: 'contacts_id'
})

ContactsInfo.belongsTo(Contacts, {
  foreignKey: 'contacts_id',
  onDelete: 'CASCADE'
})

module.exports = { Todos, TodoItems, Notes, NoteItems, Contacts, ContactsInfo, User };
