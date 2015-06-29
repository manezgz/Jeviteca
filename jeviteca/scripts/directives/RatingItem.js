/**
 * Created by e024073 on 22/06/15.
 */
angular
    .module("jeviteca")
    .directive("ratingItem",["RatingProvider",function(RatingProvider){
        return {
            restrict: "AE",
            replace: true,
            templateUrl: "views/rating.html",
            scope:{
                model:"=",
                max:"="
            },
            link: function(scope){

                scope.updateStars = function() {
                    var idx = 0;
                    scope.stars = [ ];
                    for (idx = 0; idx < scope.max; idx += 1) {
                        scope.stars.push({
                            full: scope.model.rating > idx
                        });
                    }
                };

                scope.hover = function(/** Integer */ idx) {
                    scope.hoverIdx = idx;
                };

                scope.stopHover = function() {
                    scope.hoverIdx = -1;
                };

                scope.starColor = function(/** Integer */ idx) {
                    var starClass = 'rating-normal';
                    if (idx <= scope.hoverIdx) {
                        starClass = 'rating-highlight';
                    }
                    return starClass;
                };

                scope.starClass = function(/** Star */ star, /** Integer */ idx) {
                    var starClass = 'fa-star-o';
                    if (star.full || idx <= scope.hoverIdx) {
                        starClass = 'fa-star';
                    }
                    return starClass;
                };

                scope.setRating = function(idx) {
                    var rating=idx+1;
                    scope.model.rating = rating;
                    RatingProvider.setRating(scope.model.id,scope.model.tipo,rating);
                    scope.stopHover();
                };

                scope.$watch('model.rating', function(newValue, oldValue) {
                    if (newValue !== null && newValue !== undefined) {
                        scope.updateStars();
                    }
                });



            }
        };
    }]);
