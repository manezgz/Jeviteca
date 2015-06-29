/**
 * Created by mane on 21/6/15.
 */
angular.module("jeviteca").service("AlbumesProvider",["$http","$q","$filter",function($http,$q,$filter){

    this.obtenerAlbumes = function(query) {
        var deferred = $q.defer();
        $http.get("data/albums.json").then(function(data) {
            var collection;
            if(query!=undefined){
                collection= $filter("filter")(data.data, {"title":query});
            }else{
                collection= data.data;
            }
            deferred.resolve(collection);
        });
        return deferred.promise;
    };

    this.obtenerAlbumById = function(albumId){
        var deferred = $q.defer();
        $http.get("data/albums.json").then(function(data) {

            var element = $filter("filter")(data.data, {"id": albumId})[0];
            deferred.resolve(element);
        });
        return deferred.promise;
    }
}]);