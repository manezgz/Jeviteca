
angular.module("jeviteca",["ngRoute","route-segment","view-segment"]);

angular.module("jeviteca").config(["$routeSegmentProvider","$routeProvider",function($routeSegmentProvider,$routeProvider){

    $routeSegmentProvider.when("/albumes","albumes");
    $routeSegmentProvider.when("/albumes/detalles","albumesDetalles");
    $routeSegmentProvider.when("/bandas","bandas");
    $routeSegmentProvider.when("/bandas/detalles","bandasDetalles");
    $routeSegmentProvider.when("/generos","generos");
    $routeSegmentProvider.when("/search","search");
    $routeProvider.otherwise({
        redirectTo: "/albumes"
    });

    $routeSegmentProvider.segment("albumes",{
        controller:  "AlbumesCtrl",
        templateUrl: "views/albumes.html",
        resolve: {
            Albumes:["AlbumesProvider","$routeParams", function(AlbumesProvider,$routeParams){
               return AlbumesProvider.obtenerAlbumes($routeParams.query);
            }],
        }
    });

    $routeSegmentProvider.segment("albumesDetalles",{
        controller:"AlbumesDetalleCtrl",
        templateUrl:"views/albumesDetalle.html",
        resolve: {
            Album:["AlbumesProvider","$routeParams", function(AlbumesProvider,$routeParams){
                return AlbumesProvider.obtenerAlbumById($routeParams.idAlbum);
            }],
            FavService:["FavoritesProvider", function(FavoritesProvider){
                return FavoritesProvider;
            }],
            RatingService:["RatingProvider", function(RatingProvider){
                return RatingProvider;
            }]
        }
    });

    $routeSegmentProvider.segment("bandas",{
        controller:  "BandasCtrl",
        templateUrl: "views/bandas.html",
        resolve: {
            Bandas:["BandasProvider","$routeParams", function(BandasProvider,$routeParams){
                return BandasProvider.obtenerBandas($routeParams.query);
            }]
        }
    });

    $routeSegmentProvider.segment("bandasDetalles",{
        controller:  "BandasDetalleCtrl",
        templateUrl: "views/bandasDetalle.html",
        resolve: {
            Banda:["BandasProvider","$routeParams", function(BandasProvider,$routeParams){
                return BandasProvider.obtenerBandaByName($routeParams.bandName)
            }],
            FavService:["FavoritesProvider", function(FavoritesProvider){
                return FavoritesProvider;
            }]
        }
    });

    $routeSegmentProvider.segment("generos",{
        controller:  "GenerosCtrl",
        templateUrl: "views/generos.html",
        resolve: {
            Generos:["GenerosProvider","$routeParams", function(GenerosProvider,$routeParams){
                return GenerosProvider.obtenerGeneros($routeParams.query);
            }],
        }
    });

    $routeSegmentProvider.segment("search",{
        controller:  "SearchCtrl"
    });


}]);