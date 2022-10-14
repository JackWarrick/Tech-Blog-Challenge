//Worked with Harrison Cooper 

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//Export the homeRoutes (like static pages) with name of / everything and export apiRoutes (holds all of the dynamic information) with name of /api

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
