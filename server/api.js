var express = require('express');
var categories = require('./controllers/categories.ctrl');
var checkout = require('./controllers/checkout.ctrl');
var contactus = require('./controllers/contactform.ctrl');

var router = express.Router();

router.use('/categories', categories);
router.use('/checkout', checkout)

// router.use('/categories', categories);
router.use('/contactus', contactus);

module.exports = router;