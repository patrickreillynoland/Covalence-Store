angular.module('CovalenceStore', ['ngRoute', 'ngResource', 'CovalenceStore.controllers', 'CovalenceStore.factories', 'CovalenceStore.services'])
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
    .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutController'
    })
    .when('/contactus', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })
    .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);