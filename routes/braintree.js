const express = require('express');
const router = express.Router();
const {requireSignin, isAuth} = require('../controllers/authController');
const {userById} = require('../controllers/userController');
const {generateToken, processPayment} = require('../controllers/braintreeController');

router.get('/getToken/:userId', requireSignin, isAuth, generateToken)
router.post('/payment/:userId', requireSignin, isAuth, processPayment);
router.param('userId', userById)

module.exports = router;