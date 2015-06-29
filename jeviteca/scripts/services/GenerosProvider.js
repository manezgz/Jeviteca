/**
 * Created by e024073 on 24/06/15.
 */
angular.module("jeviteca").service("GenerosProvider",["$http","$q","$filter",function($http,$q,$filter){

    this.obtenerGeneros = function(query) {
        var deferred = $q.defer();
        $http.get("data/genres.json").then(function(data) {
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

}]);