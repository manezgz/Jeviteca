angular
    .module("jeviteca")
    .directive("memberItem",["$location","FavoritesProvider",function($location,FavoritesProvider){
        return {
            restrict: "AE",
            replace: true,
            templateUrl:function(element, attr) {
                var value=attr.template;
                if(value=="memberItemList"){
                    return "views/memberItemList.html"
                }else{
                    return "views/memberItem.html"
                }
            },
            scope:{
                model:"=",
            },
            link: function(scope){
            }
        };
    }]);