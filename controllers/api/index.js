const router = require('express').Router();

// const noteRoutes = require('./noteRoutes');
const contactsRoutes = require('./contactsRoutes');
// const todoRoutes = require('./todoRoutes');
const userRoutes = require('./userRoutes')

// router.use('/noteRoutes', noteRoutes);
router.use('/contacts', contactsRoutes);
// router.use('/todos', todoRoutes);
router.use('/users', userRoutes);

module.exports = router;
