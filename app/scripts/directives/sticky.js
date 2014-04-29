'use strict';

angular.module('sakuraApp')
  .directive('sticky', function () {
    return {
      link: function (scope, element, attrs) {
        // Sticky Header - http://jqueryfordesigners.com/fixed-floating-elements/
        var top = $(element[0]).offset().top - parseFloat($(element[0]).css('margin-top').replace(/auto/, 0));

        $(window).scroll(function (event) {
          // what the y position of the scroll is
          var y = $(this).scrollTop();

          // whether that's below the form
          if (y >= top) {
            // if so, ad the fixed class
            $(element[0]).addClass('fixed');
          } else {
            // otherwise remove it
            $(element[0]).removeClass('fixed');
          }
        });
      }
    };
  });
