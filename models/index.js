const todo = require('./todo.js');
const note = require('./note');
const calendar = require('./calendar');

note.hasMany(calendar, {
  foreignKey: 'node_id',
});

calendar.belongsTo(note, {
  foreignKey: 'note_id',
});

module.exports = { todo, note, calendar };
