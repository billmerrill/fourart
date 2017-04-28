var FOUR = FOUR || {};
FOUR.calView = (function() {
  "use strict";

  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    artData,
    domContainer,

    insertHeader = function() {
      daysOfWeek.forEach(function(day) {
        domContainer.append('<div class="week-header">' + day + '</div>');
      });
    },

    padFirstWeek = function(startDay) {
      var index, length;
      for (index = 0; index < daysOfWeek.length; index++) {
        if (startDay === daysOfWeek[index]) {
          break;
        } else {
          domContainer.append('<div class="calendar-fill"></div>');
        }
      }
    },

    getInstagramMarkup = function(feature) {
      return '<a href="' + feature.properties.instagram + '"><img class="instagram-glyph" src="assets/instagram.png"></a>';
    },

    getRideWithGpsMarkup = function(feature) {
      return '<a href="' + feature.properties.ridewithgps + '"><img class="ridewithgps-glyph" src="assets/ridewithgps.png"></a>';
    },

    buildThumbnailUrl = function(rawName) {
      return FOUR.config.thumbnailDirectory + rawName.toLowerCase().replace(/ /g, "-") + ".jpg";
    },

    getFeatureThumbnailUrl = function(feature) {
      return buildThumbnailUrl(feature.properties.name);
    },

    render = function() {
      var features = artData.getFeatures();
      domContainer.empty();
      // insertHeader();
      padFirstWeek(FOUR.config.startDayOfWeek);
      for (var feature in features) {
        domContainer.append('<div class="feature" style=\'background-image: url("' +
                            getFeatureThumbnailUrl(features[feature]) + '")\'>' +
                            '<div class="feature-title">' + features[feature].properties.name + '</div>' +
                            '<div class="feature-links">' +
                            getInstagramMarkup(features[feature]) +
                            getRideWithGpsMarkup(features[feature]) + '</div>' +
                            '</div>');
      }
    };

  return {
    init: function(data, domContainerId) {
      artData = data;
      domContainer = $('#'+domContainerId);
      $(document).ajaxComplete(function(event, request, settings) {
        if (settings.url === FOUR.config.geoJsonUrl) {
          render();
        }
      });
    }
  };
}());
