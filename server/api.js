var express = require('express');
var categories = require('./controllers/categories.ctrl');
var checkout = require('./controllers/checkout.ctrl');

var router = express.Router();

router.use('/categories', categories);
router.use('/checkout', checkout)


module.exports = router;