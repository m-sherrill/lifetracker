const { Calendar } = require('../models');

const calendarData = [
  {
    title: 'things to remember',
    start: "2021-12-20T14:12:00",
    end: "2021-12-20",
    user_id: 1,
  },
];

const seedCalendar = () => Calendar.bulkCreate(calendarData);

module.exports = seedCalendar;