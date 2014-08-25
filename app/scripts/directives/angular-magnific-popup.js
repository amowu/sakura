'use strict';

angular.module('sakuraApp')
  .directive('magnificPopup', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        $(element).magnificPopup({
          type: 'iframe',
          iframe: {
            patterns: {
              youtube: {
                index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
                id: 'v=', // String that splits URL in a two parts, second part should be %id%
                // Or null - full URL will be returned
                // Or a function that should return %id%, for example:
                // id: function(url) { return 'parsed id'; }
                src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
              },
              yoku: {
                index: 'youku.com/',
                id: 'embed/',
                src: '//player.youku.com/embed/%id%'
              }
            }
          }
        });
      }
    };
  });
