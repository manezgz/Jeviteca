angular
    .module("jeviteca")
    .controller("GenerosCtrl", ["$scope","Generos","$location", function($scope,Generos,$location) {
        $scope.generos = Generos;

    }]);