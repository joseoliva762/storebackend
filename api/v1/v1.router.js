const express = require('express');
const router = express.Router();
const usersRoutes = require('./user/user.router').router;
const procuctsRoutes = require('./products/products.router').router;

router.use('/products', procuctsRoutes);
router.use('/users', usersRoutes);

exports.router = router;
