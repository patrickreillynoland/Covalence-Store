angular.module('CovalenceStore.services', ['ngRoute', 'ngResource'])
.service('CartService', ['$http', '$location', function($http, $location) {
    var cart = [];

    this.showCart = cart;

    this.addToCart = function() {
        function Product(title, price, imageurl) {
            this.title = product.title;
            this.price = product.price;
            this.image = product.imageurl;
        }
        cart.push(Product);
    }
}])