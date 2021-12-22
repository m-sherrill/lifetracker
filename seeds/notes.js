const { Notes } = require('../models');

const notesData = [
  {
    title: 'things to remember',
    user_id: 1,
  },
  {
    title: 'vaction ideas',
    user_id: 2,
  },
  {
    title: 'christmas ideas',
    user_id: 3,
  },
];

const seedNotes = () => Notes.bulkCreate(notesData);

module.exports = seedNotes;