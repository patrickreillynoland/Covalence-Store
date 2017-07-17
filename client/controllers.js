angular.module('CovalenceStore.controllers', ['ngResource', 'CovalenceStore.factories'])
.controller('CategoryController', ['$scope', '$location', '$routeParams', 'Category', function($scope, $location, $routeParams, Product) {
    $scope.category=Product.query({ id : $routeParams.id });
}])
.controller('CheckoutController', ['$scope', '$location', 'Checkout', function($scope, $location, Checkout) {
    var elements = stripe.elements();
    var card = elements.create('card');
    card.mount('#card-field');

    $scope.errorMessage = '';

    $scope.processDonation = function() {
        stripe.createToken(card, {
            name: $scope.name,
            address_line1: $scope.line1,
            address_line2: $scope.line2,
            address_city: $scope.city,
            address_state: $scope.state
        }).then(function(result) {
            if (result.error) {
                $scope.errorMessage = result.error.message;
            } else {
                // result.token is card token
                console.log(result.token);
                var c = new Checkout({
                    token: result.token.id,
                    amount: $scope.amount
                });
                c.$save(function() {
                    alert('Purchase complete! Delivery will take between 2 - 4 weeks.');
                    $location.path('/');
                }, function(err) {
                    console.log(err);
                });
            }
        });
    }
}])