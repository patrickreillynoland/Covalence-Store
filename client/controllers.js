angular.module('CovalenceStore.controllers', ['ngResource', 'CovalenceStore.factories'])
.controller('CategoryController', ['$scope', '$location', '$routeParams', 'Category', function($scope, $location, $routeParams, Product) {
    $scope.category=Product.query({ id : $routeParams.id });
}])