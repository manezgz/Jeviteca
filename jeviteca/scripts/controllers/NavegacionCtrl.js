/**
 * Created by mane on 21/6/15.
 */

angular.module("jeviteca").controller("NavegacionCtrl",["$scope","$routeSegment","$location",function($scope,$routeSegment,$location){


    $scope.rutaEsAlbumes = function(){
        return $routeSegment.startsWith( "albumes" );
    };
    $scope.limpiaSearchField = function(){
        $scope.searchInput="";
    };


    $scope.rutaEsGeneros = function(){
        return $routeSegment.startsWith( "generos" );
    };

    $scope.rutaEsBandas = function(){
        return $routeSegment.startsWith( "bandas" );
    };

    $scope.doSearch = function() {
        if($location.path!=""){
            var query = $scope.searchInput;
            //Redirijimos al Controlador de search
            if ($scope.rutaEsAlbumes()) {
                $location.path("/search").search({
                    query: query,
                    tipo: "ALBUM"
                });
            } else if ($scope.rutaEsBandas()) {
                $location.path("/search").search({
                    query: query,
                    tipo: "BANDA"
                });
            } else if ($scope.rutaEsGeneros()) {
                $location.path("/search").search({
                    query: query,
                    tipo: "GENERO"
                });
            }
        }
    };

}]);