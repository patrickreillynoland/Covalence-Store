var db = require('../config/db');

exports.getProductsByCategory = function(categoryid) {
    return db.rows('GetProductsByCategory', [categoryid]);
}

exports.read = function(id) {
    return db.row('GetProduct', [id]);
}

exports.all = function() {
    return db.rows('GetProducts');
}