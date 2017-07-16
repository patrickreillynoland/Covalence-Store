var express = require('express');
var products = require('./controllers/products.ctrl');

var router = express.Router();

router.use('/products', products);
// router.use('/categories', categories);

module.exports = router;