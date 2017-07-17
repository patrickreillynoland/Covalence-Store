var express = require('express');
var categories = require('./controllers/categories.ctrl');
var contactus = require('./controllers/contactform.ctrl');

var router = express.Router();

router.use('/categories', categories);
// router.use('/categories', categories);
router.use('/contactus', contactus);

module.exports = router;