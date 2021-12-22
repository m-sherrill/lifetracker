
const seedUser = require('./user');
const seedContacts = require('./contacts');

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

//   await seedNotes();
//   console.log('\n----- BLOG POSTS SEEDED -----\n');

//   await seedNoteItems();
//   console.log('\n----- COMMENTS SEEDED -----\n');

//   await seedContacts();
//   console.log('\n----- BLOG POSTS SEEDED -----\n');

//   await seedContactItems();
//   console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
