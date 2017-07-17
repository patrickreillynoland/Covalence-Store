var express = require('express');
var categories = require('./controllers/categories.ctrl');
var products = require ('./controllers/products.ctrl')

var router = express.Router();

router.use('/categories', categories);
// router.use('/categories', categories);
router.use('/products', products);

module.exports = router;