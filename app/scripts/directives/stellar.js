'use strict';

angular.module('sakuraApp')
  .factory('stellar', function() {
    return {
      window: function() {
        $.stellar();
      }
    };
  })
  .directive('stellarBackgroundRatio', function () {
    return {
      restrict: 'A',
      compile: function(elem, attrs, transcludeFn) {
        elem.attr('data-stellar-background-ratio', attrs.stellarBackgroundRatio);
        return function link (scope, element, attrs) {};
      }
    };
  });
