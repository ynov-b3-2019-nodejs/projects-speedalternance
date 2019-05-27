const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/user');

router.post('/signup', userControllers.signUp);
router.post('/login', userControllers.login);

module.exports = router;
