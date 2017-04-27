var FOUR = FOUR || {};
FOUR.artData = (function() {
  "use strict";

  var art,
  loadData = function(artUrl) {
    $.ajax({
      url: artUrl,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(data, status, jqxhr) {
      art = data.features;
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log("json failure: " + textStatus);
    });
  };

  return {
    init: function(geoJsonUrl, ready) {
      loadData(geoJsonUrl);
    },

    getFeatures: function() {
      return art;
    }
  };
}());
