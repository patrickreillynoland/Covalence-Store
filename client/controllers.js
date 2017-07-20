angular.module('CovalenceStore.controllers', ['ngResource', 'CovalenceStore.factories', 'CovalenceStore.services'])
.controller('CategoryController', ['SEOService', '$scope', '$location', '$routeParams', 'Category', function(SEOService, $scope, $location, $routeParams, Product) {
    SEOService.setSEO({
        title: 'Covalence Products',
        image: 'http://' + $location.host() + '/images/icon_badge.png',
        url: $location.url(),
        description: 'Our quality Covalence products available for purchase in our Covalence Store. We offer a variety of mugs, water bottles, and t-shirts'
    });
    
    $scope.category=Product.query({ id : $routeParams.id });
        var himage = '';
        $scope.himage = function() {
            if ($scope.categoryid.value === 1) {
                himage = '/images/covalence-store-home.jpg';
            } else {
                himage= '/images/covalence-store-home.jpg';
            } 
        }  
}])
.controller('productController', ['SEOService', '$scope', '$location', '$routeParams', 'Product',function(SEOService, $scope, $location,$routeParams, Product){
    SEOService.setSEO({
        title: 'Covalence Gear',
        image: 'http://' + $location.host() + '/images/icon_badge.png',
        url: $location.url(),
        description: 'Quality Covalence gear to show. Wear it proudly.'
    });
    $scope.product = Product.get({ id : $routeParams.id })
}])
.controller('CheckoutController', ['SEOService', '$scope', '$location', 'Checkout', function(SEOService, $scope, $location, Checkout) {
    SEOService.setSEO({
            title: 'Checkout',
            image: 'http://' + $location.host() + '/images/icon_badge.png',
            url: $location.url(),
            description: 'Checkout page for all of your quality Covalence products. Thank you for shopping with us.'
    });   
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
                    //send token and array of prods and prices to api...use that to do sendgrid on the back end
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
.controller('ContactController', ['SEOService', '$scope', '$location', '$http', function(SEOService, $scope, $location, $http) {
    SEOService.setSEO({
        title: 'Contact Us',
        image: 'http://' + $location.host() + '/images/icon_badge.png',
        url: $location.url(),
        description: 'We care about what you think! Please, contact us with any questions or concerns.'
    })
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
}])
.controller('CartController', ['$scope', '$location', '$http', 'CartItem', function($scope, $location, $http, CartItem) {
    $scope.showCart = function() {
        console.log(cart);
    }
}])
