const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/user');

router.post('/signup', userControllers.signUp);
router.get('/user', userControllers.getUser);

module.exports = router;
