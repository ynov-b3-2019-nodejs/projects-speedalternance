const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/user');

router.post('/signup', userControllers.signUp);
router.post('/login', userControllers.login);
router.get('/', userControllers.getUser);
router.get('/:id', userControllers.getCurrentUser);
module.exports = router;
