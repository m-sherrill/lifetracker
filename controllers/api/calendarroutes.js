const router = require('express').Router();
const { Calendar, User } = require('../../models');
const withAuth = require('../../utils/auth')

// Get all Calendar Items
router.get('/', withAuth, async (req, res) => {
  try {
    const calendarData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Calendar }],
    });


    res.status(200).json(calendarData.calendars);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Get Calendar by ID
router.get('/:id', async (req, res) => {
  try {

    const calendarData = await Calendar.findByPk(req.params.id);
    res.status(200).json(calendarData);
  } catch (err) {
    res.status(500).json(err);
  }
})


// Post New Calendar Event Associated with Specific User
router.post('/', async (req, res) => {

  try {

    const newEvent = await Calendar.create({
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
      user_id: req.session.user_id,
    });
    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a Contact
router.put('/:id', async (req, res) => {
  try {
    const calendarData = await Calendar.update(req.body,
      {
        where: {
          id: req.params.id,
        },
      }
    )
    res.json(calendarData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const calendarData = await Calendar.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(calendarData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;