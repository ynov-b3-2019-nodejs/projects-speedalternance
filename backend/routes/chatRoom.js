const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const chatControllers = require('../controllers/chatRoom');

router.get('/', checkAuth, chatControllers.getChat);
router.get('/:id', checkAuth, chatControllers.getCurrentChat);
router.post('/', checkAuth, chatControllers.createChat);

module.exports = router;
