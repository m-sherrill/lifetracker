const router = require('express').Router();

const noteRoutes = require('./notesRoutes');
const contactsRoutes = require('./contactsRoutes');
const todoRoutes = require('./todoRoutes');
const userRoutes = require('./userRoutes')
const calendarRoutes = require('./calendarroutes')

router.use('/notes', noteRoutes);
router.use('/contacts', contactsRoutes);
router.use('/todos', todoRoutes);
router.use('/users', userRoutes);
router.use('/calendar', calendarRoutes);

module.exports = router;
