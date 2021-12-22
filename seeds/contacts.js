const { Contacts } = require('../models');

const contactsData = [
  {
    first_name: 'Johnny',
    last_name: 'Cash',
    user_id: 1,
  },
  {
    first_name: 'Bob',
    last_name: 'Dylan',
    user_id: 2,
  },
  {
    first_name: 'Mary',
    last_name: 'Johnson',
    user_id: 3,
  },
];

const seedContacts = () => Contacts.bulkCreate(contactsData);

module.exports = seedContacts;