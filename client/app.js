angular.module('CovalenceStore', ['ngRoute', 'ngResource', 'CovalenceStore.controllers', 'CovalenceStore.factories'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html'
    })
     .when('/category/:id', {
        templateUrl: 'views/category.html',
        controller: 'CategoryController'
    })
    .when('/product/:id', {
        templateUrl: 'views/singleProduct.html',
        controller: 'productController'
    })
    // Change "Products" to Category, make "Products" for single view.
    .otherwise({
        redirectTo: '/'
    });
}]);