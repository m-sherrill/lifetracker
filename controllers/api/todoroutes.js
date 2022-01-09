const router = require('express').Router();
const { Todo, TodoItems } = require('../../models');

// get all todo lists and items
router.get('/', async (req, res) => {
    try {
        const todoData = await Todo.findAll(
            {
                include: [
                    {
                        model: TodoItems,
                    },
                ],   
            });
        res.status(200).json(todoData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// find a specific todo list by id
router.get('/:id', async (req, res) => {
    try {
      console.log(req.params.id)
      const todoData = await Todo.findByPk(req.params.id);
      res.status(200).json(todoData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  })
  
// add a new todo list
router.post('/', async (req, res) => {
    try {
        console.log("IN ADD ITEMS ROUTE!!!!")
        console.log('REQ.body!!!', req.body)
        const todoData = await Todo.create({
            name: req.body.name,
            user_id: req.session.user_id,
        });
     res.status(200).json(todoData);
    } catch (err) {
    res.status(400).json(err);
}
});

// update todo list title
router.put('/:id', async (req, res) => {
    try {
        const todoData = await Todo.update({
            name: req.body.name,
            user_id: req.body.user_id,
        },
            {
                where: {
                    id: req.params.id,
                }
            });
        res.status(200).json(todoData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete an entire list
router.delete('/:id', async (req, res) => {
    try {
        const todoData = await Todo.destroy({
            where: {
                id: req.params.id,
            }
        });
        if(!todoData){
            res.status(404).json({message: 'No todo with this id !!'});
            return;
          }
          res.status(200).json(todoData)
    } catch (err) {
        res.status(400).json(err);
    }
});


// Add specific items to an individual list -- todo items
router.post('/items', async (req, res) => {
    try {
        console.log('REQ.body!!!', req.body)
        const todoData = await TodoItems.create({
            name: req.body.name,
            todo_id: req.body.id,
            user_id: req.session.user_id,
        });
     res.status(200).json(todoData);
    } catch (err) {
    res.status(400).json(err);
}
});

router.delete('/items/:id', async (req, res) => {
    try {
        const todoData = await TodoItems.destroy({
            where: {
                id: req.params.id,
            }
        });
        if(!todoData){
            res.status(404).json({message: 'No item found with this id!'});
            return;
          }
          res.status(200).json(todoData)
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;
