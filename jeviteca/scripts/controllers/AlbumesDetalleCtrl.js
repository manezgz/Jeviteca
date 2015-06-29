/**
 * Created by e024073 on 22/06/15.
 */
angular
    .module("jeviteca")
    .controller("AlbumesDetalleCtrl", ["$scope","Album","FavService","RatingService",function($scope,Album,FavService,RatingService){
        $scope.album = Album;
        $scope.album.favorite=FavService.isFavoriteString(Album.id,"ALBUM");
        $scope.album.tipo="ALBUM";
        $scope.album.rating=RatingService.getRating(Album.id,"ALBUM");
        $scope.favService=FavService;

    }]);