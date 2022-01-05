const router = require('express').Router();
const { Todo, TodoItems } = require('../../models');

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
  

router.post('/', async (req, res) => {
    try {
        const todoData = await Todo.create({
            name: req.body.name,
            user_id: req.body.user_id,
        });
     res.status(200).json(todoData);
    } catch (err){
    res.status(400).json(err);
}
});

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







module.exports = router;