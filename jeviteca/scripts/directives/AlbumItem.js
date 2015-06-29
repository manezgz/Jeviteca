/**
 * Created by e024073 on 22/06/15.
 */
angular
    .module("jeviteca")
    .directive("albumItem",["$location","FavoritesProvider",function($location,FavoritesProvider){
       return {
           restrict: "AE",
           replace: true,
           templateUrl:function(element, attr) {
               var value=attr.template;
               if(value=="simpleAlbum"){
                   return "views/albumItemSimple.html"
               }else if(value=="simpleAlbum2"){
                   return "views/albumItemSimple2.html"
               }else{
                   return "views/albumItem.html"
               }
           },
           scope:{
               model:"=",
           },
           link: function(scope){
               scope.verDetalle = function(id){
                   $location.path("/albumes/detalles").search({
                       idAlbum:id
                   });
               };
               scope.favoriteProvider =FavoritesProvider;
           }
       };
    }]);