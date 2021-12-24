
const router = require('express').Router();


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
    res.render('notes');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
