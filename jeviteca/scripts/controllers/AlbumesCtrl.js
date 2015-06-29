/**
 * Created by mane on 21/6/15.
 */
angular
    .module("jeviteca")
    .controller("AlbumesCtrl", ["$scope","Albumes","$location", function($scope,Albumes,$location) {
        $scope.albumes = Albumes;

    }]);