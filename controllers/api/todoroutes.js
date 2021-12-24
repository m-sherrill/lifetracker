const router = require('express').Router();
const { Todo } = require('../../models');

router.get('/', async (req, res) => {

    try {
        const todoData = await Todo.findAll(
            {
                include: [
                    { model: User }, { model: TodoItems }
                ],
            });
        res.status(200).json(todoData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const todoData = await Todo.create({
            title: req.body.title,
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
            title: req.body.title,
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


router.delete('/delete/:id', async (req, res) => {
    try {
        const tododata = await Todo.destroy({
            where: {
                id: req.params.id,
            }
        });

        res.status(200).json(tododata)

    } catch (err) {
        res.status(400).json(err);
    }
});







module.exports = router;