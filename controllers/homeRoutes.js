
const router = require('express').Router();
const { Notes } = require('../models')
// Simple Get Route to try to make sure handlebars is connected
router.get('/', async (req, res) => {
  try {
    res.render('home');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/notes', async (req, res) => {
  try {
    const noteData = await Notes.findAll()
    const notes = noteData.map((project) => project.get({ plain: true }))
    console.log(notes)
    res.render('notes', { notes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

