
const seedUser = require('./user');
const seedContacts = require('./contacts');
const seedNotes = require('./notes');
const seedTodo = require('./todo');
const seedTodoItems = require('./todoltems');
const seedCalendar = require('./calendar')


const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedContacts();
  console.log('\n----- CONTACTS SEEDED -----\n');


  await seedTodo();
  console.log('\n----- TODO SEEDED -----\n');

  await seedTodoItems();
  console.log('\n----- TODO ITEMS SEEDED -----\n');

  await seedNotes();
  console.log('\n----- NOTES SEEDED -----\n');

  await seedCalendar();
  console.log('\n----- Calendar SEEDED -----\n');

  process.exit(0);
};

seedAll();
