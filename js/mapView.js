var FOUR = FOUR || {};

FOUR.mapView = (function() {
  "use strict";
  var artData, mapInit = function(mapDomID) {
    const tileUrl = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';

    window.theMap = L.map(mapDomID).setView([47.59909, -122.33136], 13);
    L.tileLayer(tileUrl, {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(window.theMap);
  },

  loadArt = function(artData) {
    var features = artData.getFeatures();
    for (var feature in features) {
      console.log('feature!');
    }

  };

  return {
    init: function(mapDomID, artData) {
      artData = artData;
      mapInit(mapDomID);
      loadArt(artData);
    }
  };
}());
