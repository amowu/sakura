'use strict';

angular.module('sakuraApp')
  .factory('stellar', function () {
    return {
      window: function() {
        $(window).stellar();
      },
      against: function (selector, args) {
        $(selector).strllar(args);
      }
    };
  })
  .directive('stellarRatio', function () {
    return {
      restrict: 'A',
      compile: function (elem, attrs, transcludeFn) {
        elem.attr('data-stellar-ratio', attrs.stellarRatio);
        return function link (scope, element, attrs) {};
      }
    }
  })
  .directive('stellarBackgroundRatio', function () {
    return {
      restrict: 'A',
      compile: function(elem, attrs, transcludeFn) {
        elem.attr('data-stellar-background-ratio', attrs.stellarBackgroundRatio);
        return function link (scope, element, attrs) {};
      }
    };
  })
  .directive('stellarHorizontalOffset', function () {
    return {
      restrict: 'A',
      compile: function (elem, attrs, transcludeFn) {
        elem.attr('data-stellar-horizontal-offset', attrs.stellarHorizontalOffset);
        return function link (scope, element, attrs) {};
      }
    }
  })
  .directive('stellarVerticalOffset', function () {
    return {
      restrict: 'A',
      compile: function (elem, attrs, transcludeFn) {
        elem.attr('data-stellar-vertical-offset', attrs.stellarVerticalOffset);
        return function link (scope, element, attrs) {};
      }
    }
  });
