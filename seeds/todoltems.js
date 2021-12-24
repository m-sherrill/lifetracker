const { TodoItems } = require('../models');

const TodoItemsData = [
  {
    name: 'todo item #1',
    note_id: 1,
    user_id: 1,
  },
  {
    name: 'Random todo item',
    note_id: 2,
    user_id: 2,
  },
  {
    name: 'Something I need to finish!',
    note_id: 3,
    user_id: 3,
  },
];

const seedTodoItems = () => TodoItems.bulkCreate(TodoItemsData);

module.exports = seedTodoItems;