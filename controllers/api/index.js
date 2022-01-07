const router = require('express').Router();
const noteRoutes = require('./notesroutes');
const contactsRoutes = require('./contactsroutes');
const todoRoutes = require('./todoRoutes');
const userRoutes = require('./userroutes')
const calendarRoutes = require('./calendarroutes')

router.use('/notes', noteRoutes);
router.use('/contacts', contactsRoutes);
router.use('/todos', todoRoutes);
router.use('/users', userRoutes);
router.use('/calendar', calendarRoutes);

module.exports = router;
