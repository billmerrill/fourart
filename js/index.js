var FOUR = FOUR || {};

FOUR.config = {
  "geoJsonUrl": "/data/ArtByBike.json",
  "startDayOfWeek": "Saturday"
};


FOUR.indexPage = (function() {
  "use strict";

  return {
    init: function() {
      FOUR.calView.init(FOUR.artData, "calview");
      FOUR.artData.init(FOUR.config.geoJsonUrl);
    }
  };
}());
