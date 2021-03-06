angular.module('CovalenceStore.factories', ['ngRoute', 'ngResource'])
.factory('Category', ['$resource', function($resource) {
    return $resource('/api/categories/:id', { id: '@id' }, {
        update: {
            method: 'PUT'
        }
    });
}])
.factory('Product', ['$resource', function($resource){
    return $resource('/api/products/:id');
}])
.factory('Checkout', ['$resource', function($resource) {
    return $resource('/api/checkout/:id');
}])
.factory('CartItem', ['$rootScope', function ($rootScope) {
    var items = [];
    var basket = {};

    basket.basketCount = function() {
        return items.length;
    }
    basket.addItem = function(item) {
        items.push(item);
    };
    basket.removeItem = function(item) {
        var index = items.indexOf(item);
        items.splice(index, 1);
    };
    basket.getItems = function() {
        return items;
    };
    
    return basket;
}])