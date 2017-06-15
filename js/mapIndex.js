var FOUR = FOUR || {};

FOUR.config = {
  "geoJsonUrl": "/data/ArtByBike.json",
  "thumbnailDirectory": "/data/thumbnails/"
};


FOUR.mapIndexPage = (function() {
  "use strict";

  return {
    init: function() {
      FOUR.mapView.init("mapview", FOUR.artData);
      FOUR.artData.init(FOUR.config.geoJsonUrl);
    }
  };
}());
