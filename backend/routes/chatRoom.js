const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const chatControllers = require('../controllers/chatRoom');

router.get('/', chatControllers.getChat);
router.get('/user', chatControllers.getCurrentUserChat);
router.get('/:id', chatControllers.getCurrentChat);
router.post('/', chatControllers.createChat);
router.put('/:id', chatControllers.updateChat);

module.exports = router;
