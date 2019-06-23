const express = require('express');
const router = express.Router()

const { signup, sayHi } = require('../controllers/user_controller');

router.get('/', sayHi);

router.post('/signup', signup);

module.exports = router;