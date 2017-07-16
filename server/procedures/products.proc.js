var db = require('../config/db');

exports.getCategory = function(categoryid) {
    return db.rows('GetCategory', [categoryid]);
}

exports.read = function(id) {
    return db.row('GetProduct', [id]);
}

exports.all = function() {
    return db.rows('GetProducts');
}