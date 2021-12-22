const { User } = require('../models');

const userData = [
  {
    first_name: 'John',
    last_name: 'Smith',
    display_name: 'John-S',
    email: 'john@john.com',
    password: 'password12345',
  },
  {
    first_name: 'Sue',
    last_name: 'Johnson',
    display_name: 'Sue-J',
    email: 'sue@sue.com',
    password: 'password12345',
  },
  {
    first_name: 'Jane',
    last_name: 'Doe',
    display_name: 'Jane-D',
    email: 'jane@jane.com',
    password: 'password12345',
  },
]

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;