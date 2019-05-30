const express = require('express');
const router = express.Router();

const postControllers = require('../controllers/post');

router.post('/create', postControllers.new);

module.exports = router;
