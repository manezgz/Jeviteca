/**
 * Created by e024073 on 23/06/15.
 */
angular
    .module("jeviteca")
    .controller("BandasDetalleCtrl", ["$scope","Banda","FavService",function($scope,Banda,FavService){
        $scope.banda = Banda;
        $scope.banda.favorite=FavService.isFavoriteString(Banda.name,"BANDA");
        $scope.favService=FavService;

        $scope.wikipediaLink = function(bandName) {
            var query = encodeURIComponent(bandName);
            return "https://es.wikipedia.org/wiki/Special:Search?search=" + query;
        }
    }]);