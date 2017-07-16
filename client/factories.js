angular.module('CovalenceStore.factories', ['ngRoute', 'ngResource'])
.factory('Product', ['$resource', function($resource) {
    return $resource('/api/products/:id', { id: '@id' }, {
        update: {
            method: 'PUT'
        }
    });
}])