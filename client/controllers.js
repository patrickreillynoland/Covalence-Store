angular.module('CovalenceStore.controllers', ['ngResource', 'CovalenceStore.factories'])
.controller('CategoryController', ['$scope', '$location', '$routeParams', 'Category', function($scope, $location, $routeParams, Product) {
    $scope.category=Product.query({ id : $routeParams.id });
}])

.controller('productController', ['$scope', '$location', '$routeParams', 'Product',function($scope, $location,$routeParams, Product){
    $scope.product = Product.get({ id : $routeParams.id })
}])