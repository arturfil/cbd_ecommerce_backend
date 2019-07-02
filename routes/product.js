const express = require('express');
const router = express.Router();

const { 
  create, 
  productById, 
  read, 
  remove, 
  update, 
  list, 
  listRelated, 
  listSearch,
  listCategories,
  listBySearch, 
  photo 
} = require("../controllers/productController");

const { requireSignin, isAuth, isAdmin } = require('../controllers/authController');
const { userById } = require('../controllers/userController');

// because of how routing works, /api/product/products
router.get('/products/related/:productId', listRelated)
router.get('/products', list)
router.get('/products/categories', listCategories)
router.get('/photo/:productId', photo)
router.get('/products/search', listSearch);
router.post('/products/by/search', listBySearch);
router.get('/:productId', read);
router.post("/create/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  create
);
router.put('/:productId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  update
)
router.delete('/:productId/:userId', 
  requireSignin,
  isAuth,
  isAdmin,
  remove
)

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;