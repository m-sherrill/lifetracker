const { ContactsInfo } = require('../models');

const contactsInfoData = [
  {
    phone: '555-555-5555',
    email: 'Cash@cash.com',
    contacts_id: 1,
    user_id: 1,
  },
  {
    phone: '555-555-5555',
    email: 'Dylan@dylancom',
    contacts_id: 2,
    user_id: 2,
  },
  {
    phone: '555-555-5555',
    email: 'Johnson@johnson.com',
    contacts_id: 3,
    user_id: 3,
  },
];

const seedContactsInfo = () => ContactsInfo.bulkCreate(contactsInfoData);

module.exports = seedContactsInfo;