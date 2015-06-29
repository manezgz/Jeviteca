/**
 * Created by mane on 21/6/15.
 */
angular.module("jeviteca").service("FavoritesProvider",["$http","$q","$filter",function($http,$q,$filter){

    this.favorite =function(id,tipo){
        if(this.hasLocalStorage()) {
            var favorite = localStorage.getItem(tipo + "_" + id);
            return favorite == "FAV";
        }
    }

    this.noFavorite =function(id,tipo){
        if(this.hasLocalStorage()) {
            var favorite = localStorage.getItem(tipo + "_" + id);
            return favorite != "FAV";
        }
    }

    this.changeFav =function(id,tipo){
        if(this.hasLocalStorage()) {
            var favorite = localStorage.getItem(tipo + "_" + id);
            if (favorite == "FAV") {
                this.uncheckFavorite(id,tipo);
            } else {
                this.checkFavorite(id,tipo);
            }
        }
    }

    this.hasLocalStorage=function(){
        if(typeof (Storage)!= "undefined"){
            return "true";
        }
        else{
            return "false";
        }
    };

    this.checkFavorite = function(id,tipo){
        localStorage.setItem(tipo + "_" + id,"FAV");
    };

    // Uncheck a band/album/genre as favorite
    this.uncheckFavorite = function(id,tipo){
        localStorage.removeItem(tipo + "_" + id);
    };

    this.isFavoriteString=function(id,tipo){
        var rdo=this.favorite(id,tipo);
        if(rdo){
           return "FAVORITE";
        }else{
           return "NO FAVORITE";
        }
    };



}]);