
const seedUser = require('./user');
const seedContacts = require('./contacts');
const seedContactsInfo = require('./contactsInfo');

const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedContacts();
  console.log('\n----- CONTACTS SEEDED -----\n');

  await seedContactsInfo();
  console.log('\n----- CONTACTS INFO SEEDED -----\n');

//   await seedTodo();
//   console.log('\n----- TODO SEEDED -----\n');

//   await seedTodoItems();
//   console.log('\n----- TODO ITEMS SEEDED -----\n');

//   await seedNotes();
//   console.log('\n----- NOTES SEEDED -----\n');

//   await seedNotesItems();
//   console.log('\n----- NOTES ITEMS SEEDED -----\n');

  process.exit(0);
};

seedAll();
