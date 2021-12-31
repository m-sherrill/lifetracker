const { Contacts } = require('../models');

const contactsData = [
  {
    first_name: 'Johnny',
    last_name: 'Cash',
    phone: '555-555-5555',
    email: 'johnny@johnny.com',
    notes: 'nice guy',
    user_id: 1,
  },
  {
    first_name: 'Bob',
    last_name: 'Dylan',
    phone: '555-555-5555',
    email: 'Dylan@dylancom',
    notes: 'one of a kind',
    user_id: 2,
  },
  {
    first_name: 'Mary',
    last_name: 'Johnson',
    phone: '555-555-5555',
    email: 'Johnson@johnson.com',
    notes: 'fun fun fun',
    user_id: 3,
  },
];

const seedContacts = () => Contacts.bulkCreate(contactsData);

module.exports = seedContacts;