var FOUR = FOUR || {};
FOUR.calView = (function() {
  "use strict";

  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    artData,
    domContainer,

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
      return '<a href="' + feature.properties.instagram + '">instagram</a>';
    },

    getRideWithGpsMarkup = function(feature) {
      return '<a href="' + feature.properties.ridewithgps + '">Ride With GPS</a>';
    },

    render = function() {
      var features = artData.getFeatures();
      padFirstWeek(FOUR.config.startDayOfWeek);
      for (var feature in features) {
        domContainer.append('<div class="feature">' +
                            features[feature].properties.name +
                            getInstagramMarkup(features[feature]) +
                            getRideWithGpsMarkup(features[feature]) + '</div>');
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
