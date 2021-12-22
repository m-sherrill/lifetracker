const Todos = require('./Todo')
const TodoItems = require('./TodoItems')
const Notes = require('./Notes');
const NoteItems = require('./NoteItems')
const Contacts = require('./Contacts')
const ContactsInfo = require('./ContactsInfo')
const User = require('./User')

note.hasMany(calendar, {
  foreignKey: 'node_id',
});

calendar.belongsTo(note, {
  foreignKey: 'note_id',
});

module.exports = { Todos, TodoItems, Notes, NoteItems, Contacts, ContactsInfo, User };
