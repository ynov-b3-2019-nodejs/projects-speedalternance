const express = require('express');
const router = express.Router();

const chatControllers = require('../controllers/chat');

router.get('/', chatControllers.getChat);

module.exports = router;
