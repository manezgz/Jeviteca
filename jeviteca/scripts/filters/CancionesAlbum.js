/**
 * Created by mane on 21/6/15.
 */
angular.module("jeviteca").filter("trackListAlbum",function(){
    return function(collection) {
        return "TrackList: " + collection.join(", ");
    };
});