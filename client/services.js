angular.module('CovalenceStore.services', ['ngRoute', 'ngResource'])
//     .service('CartService', ['$rootScope', '$window', 'ngCartItem', 'store', function ($rootScope, $window, ngCartItem, store) {
//         var cart = {
// 	        title: this.title,
// 	        price: this.price,
// 	        image: this.image
//         };
// var jsonStr = JSON.stringify( cart );
// sessionStorage.setItem( "cart", jsonStr );
// // now the user can go away and come back.
// var cartValue = sessionStorage.getItem( "cart" );
// var cartObj = JSON.parse( cartValue );
//         var total = parseInt( sessionStorage.getItem( "total" ) );
//         var quantity = 2;
//         var updatedTotal = total * quantity;
//         sessionStorage.setItem( "total", updatedTotal ); 
//     }])
.service('SEOService', ['$rootScope', function($rootScope) {
    this.setSEO = function(data) { //pass in an obj that'll contain the various SEO properties we want to set for given pg-title, description, url, image
        $rootScope.seo = {}; //sets $rootScope.seo to be an empty object
        for(var p in data) { //for...in loop is used to loop through the property names of an object
            $rootScope.seo[p] = data[p]; //copies the property/values from the "data" parameter to $rootScope.seo
        }
} }]);

