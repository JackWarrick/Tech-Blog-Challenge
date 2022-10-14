//Worked with Harrison Cooper 

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

//take the routes from our other files in this folder and export them with the location of /users and /posts

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
