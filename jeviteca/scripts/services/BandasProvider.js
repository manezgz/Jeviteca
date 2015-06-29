/**
 * Created by e024073 on 23/06/15.
 */
angular.module("jeviteca").service("BandasProvider",["$http","$q","$filter",function($http,$q,$filter){

    this.obtenerBandas = function(query) {
        var deferred = $q.defer();
        $http.get("data/bands.json").then(function(data) {
            var collection;
            if(query!=undefined){
                collection= $filter("filter")(data.data, {"name":query});
            }else{
                collection= data.data;
            }
            deferred.resolve(collection);
        });
        return deferred.promise;
    };

    this.obtenerBandaByName = function(bandId){
        var deferred = $q.defer();
        $http.get("data/bands.json").then(function(data) {
            var element = $filter("filter")(data.data, {"name": bandId})[0];
            deferred.resolve(element);
        });
        return deferred.promise;
    }
}]);