const express = require('express');
const router = express.Router();

const { create, read, update, remove, list, categoryById } = require("../controllers/categoryController");
const { requireSignin, isAuth, isAdmin } = require('../controllers/authController');
const { userById } = require('../controllers/userController');

// categories have to be all the way to the top
router.get('/categories', list)
router.get('/:categoryId', read);
router.post("/create/:userId", 
  requireSignin, 
  isAuth, 
  isAdmin,
  create
);
router.put("/:categoryId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);
router.delete("/:categoryId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

router.param('categoryId', categoryById)
router.param("userId",userById);

module.exports = router;