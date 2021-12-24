const { NoteItems } = require('../models');

const noteItemsData = [
  {
    noteContent: 'I am note content!',
    note_id: 1,
    user_id: 1,
  },
  {
    noteContent: 'I am even more amazing NOTE CONTENT!',
    note_id: 2,
    user_id: 2,
  },
  {
    noteContent: 'HELLO beautiful content!',
    note_id: 3,
    user_id: 3,
  },
];

const seedNoteItems = () => NoteItems.bulkCreate(noteItemsData);

module.exports = seedNoteItems;