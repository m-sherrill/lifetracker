const { Notes } = require('../models');

const notesData = [
  {
    title: 'things to remember',
    content: 'I am note content!',
    user_id: 1,
  },
  {
    title: 'vaction ideas',
    content: 'I am even more amazing NOTE CONTENT!',
    user_id: 2,
  },
  {
    title: 'christmas ideas',
    content: 'HELLO beautiful content!',
    user_id: 3,
  },
];

const seedNotes = () => Notes.bulkCreate(notesData);

module.exports = seedNotes;