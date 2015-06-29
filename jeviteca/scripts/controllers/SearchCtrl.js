/**
 * Created by mane on 21/6/15.
 */
angular.module("jeviteca").controller("SearchCtrl",["$scope","$location","$routeParams",
    function($scope,$location,$routeParams){
        var tipo=$routeParams.tipo;
        var query=$routeParams.query;
        if (tipo=="ALBUM") {
            $location.path("/albumes").search({
                query: query
            });
        } else if (tipo=="BANDA") {
            $location.path("/bandas").search({
                query: query
            });
        } else if (tipo=="GENERO") {
            $location.path("/generos").search({
                query: query
            });
        }

    }]);