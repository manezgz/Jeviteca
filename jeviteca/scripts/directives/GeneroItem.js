/**
 * Created by e024073 on 23/06/15.
 */
angular
    .module("jeviteca")
    .directive("generoItem",["$location","FavoritesProvider",function($location,FavoritesProvider){
        return {
            restrict: "AE",
            replace: true,
            templateUrl: "views/generoItem.html",
            scope:{
                model:"=",
            },
            link: function(scope){
                scope.favoriteProvider =FavoritesProvider;
            }
        };
    }]);