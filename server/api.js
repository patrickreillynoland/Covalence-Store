var express = require('express');
var categories = require('./controllers/categories.ctrl');

var router = express.Router();

router.use('/categories', categories);
// router.use('/categories', categories);

module.exports = router;