angular.module('CovalenceStore', ['ngRoute', 'ngResource', 'CovalenceStore.controllers', 'CovalenceStore.factories'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html'
    })
     .when('/products/:id', {
        templateUrl: 'views/products.html',
        controller: 'CategoryController'
    })
    // .when('/products', {
    //     templateUrl: 'views/products.html',
    //     controller: 'ProductsController'
    // })
    .otherwise({
        redirectTo: '/'
    });
}]);