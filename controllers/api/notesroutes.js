const router = require('express').Router();
const { Notes } = require('../../models');

//all notes
router.get('/', async (req, res) => {
    try {
        const notesData = await Notes.findAll(
        );
        console.log(notesData)
        res.status(200).json(notesData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

//note by id
router.get('/:id', async (req, res) => {

    try {
        console.log(req.params.id)
        const noteData = await Notes.findByPk(req.params.id);
        res.status(200).json(noteData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

//new note

router.post('/', async (req, res) => {
    try {
        const newNote = await Notes.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id

        });
        console.log(newNote)
        res.status(200).json(newNote);
    } catch (err) {
        res.status(400).json(err);
    }
});

//update a note

router.put('/:id', async (req, res) => {
    try {
        const noteData = await Notes.update(req.body,
            {
                where: {
                    id: req.params.id,
                },
            }
        )
        res.json(noteData);
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// delete note

router.delete('/:id', async (req, res) => {
    try {
        const noteData = await Notes.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(noteData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;