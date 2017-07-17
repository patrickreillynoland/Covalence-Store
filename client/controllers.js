angular.module('CovalenceStore.controllers', ['ngResource', 'CovalenceStore.factories'])
.controller('CategoryController', ['$scope', '$location', '$routeParams', 'Category', function($scope, $location, $routeParams, Product) {
    $scope.category=Product.query({ id : $routeParams.id });
}])
.controller('ContactController', ['$scope', '$location', '$http', function($scope, $location, $http) {
    $scope.send = function() {
        $http({
            method: 'POST',
            url: '/api/contactus',
            name: $scope.name,
            email: $scope.email,
            message: $scope.content
        }).then(function(success) {
            alert('Message Sent');
            $location.path('/');
        }, function(err) {
            console.log(err);
        });
    }
}]);