angular.module('CovalenceStore.controllers', ['ngResource', 'CovalenceStore.factories'])
.controller('ProductsController', ['$scope', '$location', '$routeParams', 'Product', function($scope, $location, $routeParams, Product) {
    $scope.products=Product.query();
}])
.controller('CategoryController', ['$scope', '$location', '$routeParams', 'Product', function($scope, $location, $routeParams, Product) {
    $scope.category=Product.query({ id : $routeParams.id });
}])