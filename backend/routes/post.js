const express = require('express');
const router = express.Router();

const postControllers = require('../controllers/post');

router.post('', postControllers.new);
router.get('',postControllers.getAll)

module.exports = router;
