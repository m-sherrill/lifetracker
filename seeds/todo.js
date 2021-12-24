const { Todo } = require('../models');

const todoData = [
  {
    name: 'safeway',
    user_id: 1,
  },
  {
    name: 'costco',
    user_id: 2,
  },
  {
    name: 'todo today',
    user_id: 3,
  },
];

const seedTodo = () => Todo.bulkCreate(todoData);

module.exports = seedTodo;