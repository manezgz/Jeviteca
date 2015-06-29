/**
 * Created by e024073 on 25/06/15.
 */
angular.module("jeviteca").service("RatingProvider",["$http","$q","$filter",function($http,$q,$filter){

    this.getRating=function(id,tipo){
        if(this.hasLocalStorage()) {
            var rating = localStorage.getItem("RATE" + "_" +tipo+"_"+ id);
            //Saneamos
            if(rating==null ||rating=="undefined"){
                rating=0;
            }
            return rating;
        }
    };

    this.setRating=function(id,tipo,rating){
        if(this.hasLocalStorage()) {
            localStorage.setItem("RATE" + "_" +tipo+"_"+ id,rating);
        }
    };



    this.hasLocalStorage=function(){
        if(typeof (Storage)!= "undefined"){
            return "true";
        }
        else{
            return "false";
        }
    };



}]);