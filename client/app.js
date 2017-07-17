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
    .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutController'
    })
    .when('/contactus', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);