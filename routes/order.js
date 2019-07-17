const express = require('express');
const router = express.Router();

const {requireSignin, isAuth} = require('../controllers/authController');
const { userById, addOrderToUserHistory } = require('../controllers/userController');
const { decreaseQuantity } = require('../controllers/productController');
const {create} = require('../controllers/orderController');

router.post('/order/create/:userId', 
  requireSignin, 
  isAuth, 
  addOrderToUserHistory,
  decreaseQuantity,
  create
);

router.param("userId", userById);

module.exports = router;