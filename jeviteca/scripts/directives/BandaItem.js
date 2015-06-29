/**
 * Created by e024073 on 23/06/15.
 */
angular
    .module("jeviteca")
    .directive("bandaItem",["$location","FavoritesProvider",function($location,FavoritesProvider){
        return {
            restrict: "AE",
            replace: true,
            templateUrl: "views/bandaItem.html",
            scope:{
                model:"=",
            },
            link: function(scope){
                scope.verDetalle = function(bandName){
                    $location.path("/bandas/detalles").search({
                        bandName:bandName
                    });
                };

                scope.favoriteProvider =FavoritesProvider;

            }
        };
    }]);