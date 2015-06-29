/**
 * Created by e024073 on 22/06/15.
 */
angular
    .module("jeviteca")
    .directive("tracklistItem",function(){
        return {
            restrict: "AE",
            replace: true,
            templateUrl: "views/tracklistItem.html",
            scope:{
                song:"=",
                band:"="
            },
            link: function(scope){
                scope.getYoutubeLink=function (bandName, trackName) {
                    var query = encodeURIComponent((bandName + " " + trackName).toLowerCase());
                    return "https://www.youtube.com/results?search_query=" + query;
                };
            }
        };
    });