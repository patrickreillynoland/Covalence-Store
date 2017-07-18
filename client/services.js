angular.module('CovalenceStore.services', [])
.service('SEOService', ['$rootScope', function($rootScope) {
    this.setSEO = function(data) { //pass in an obj that'll contain the various SEO properties we want to set for given pg-title, description, url, image
        $rootScope.seo = {}; //sets $rootScope.seo to be an empty object
        for(var p in data) { //for...in loop is used to loop through the property names of an object
            $rootScope.seo[p] = data[p]; //copies the property/values from the "data" parameter to $rootScope.seo
        }
} }]);

