/**
 * Created by mane on 21/6/15.
 */
angular.module("jeviteca").filter("imagenes",function(){
    return function(text) {
        return "img/"+text;
    };
});