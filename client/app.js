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
<<<<<<< HEAD
    // Change "Products" to Category, make "Products" for single view.
=======
    // .when('/products', {
    //     templateUrl: 'views/products.html',
    //     controller: 'ProductsController'
    // })
>>>>>>> 476772afeb9dff7cafa3d8b878c2904fad7b5517
    .otherwise({
        redirectTo: '/'
    });
}]);