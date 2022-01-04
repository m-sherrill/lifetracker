const router = require('express').Router();
const { Calendar } = require('../../models');

// Get all Contacts
router.get('/', async (req, res) => {
  try {
    const calendarData = await Calendar.findAll(
    );
    console.log(calendarData)
    res.status(200).json(calendarData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});


// Get Calendar by ID
router.get('/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const calendarData = await Calendar.findByPk(req.params.id);
    res.status(200).json(calendarData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
})


// Post New Calendar Event Associated with Specific User
router.post('/', async (req, res) => {
    
  try {
      console.log("in new event try!!")
    const newEvent = await Calendar.create({
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
      user_id: req.session.user_id,
    });
    console.log(newEvent)
    res.status(200).json(newEvent);
  } catch (err) {
      console.log("in the ERROR!!!!", err)
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
    res.json(contactData);
  }
  catch (err) {
    console.log(err)
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
    console.log(err)
    res.status(500).json(err);
  }
});


module.exports = router;