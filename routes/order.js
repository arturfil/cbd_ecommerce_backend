const express = require('express');
const router = express.Router();

const {requireSignin, isAuth, isAdmin} = require('../controllers/authController');
const { userById, addOrderToUserHistory } = require('../controllers/userController');
const { decreaseQuantity } = require('../controllers/productController');
const {create, listOrders} = require('../controllers/orderController');


router.get('/order/list/:userId', requireSignin, isAuth, isAdmin, listOrders);
router.post('/order/create/:userId', 
  requireSignin, 
  isAuth, 
  addOrderToUserHistory,
  decreaseQuantity,
  create
);

router.param("userId", userById);

module.exports = router;