angular.module('CovalenceStore.controllers', ['ngResource', 'CovalenceStore.factories'])
.controller('ProductsController', ['$scope', '$location', 'Product', function($scope, $location, Product) {
    $scope.products=Product.query();
}]);