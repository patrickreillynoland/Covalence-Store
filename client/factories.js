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
}]);
