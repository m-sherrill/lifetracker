const seedBlog = require('./blogseeds');
const seedComment = require('./commentseeds');
const seedUser = require('./userseeds');


const sequelize = require('../config/connections');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedTodo();
  console.log('\n----- BLOG POSTS SEEDED -----\n');

  await seedTodoitems();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedNotes();
  console.log('\n----- BLOG POSTS SEEDED -----\n');

  await seedNoteItems();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedContacts();
  console.log('\n----- BLOG POSTS SEEDED -----\n');

  await seedContactItems();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
