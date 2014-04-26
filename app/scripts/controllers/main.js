'use strict';

angular.module('sakuraApp')
  .controller('MainCtrl', function ($scope, stellar) {
    stellar.window();
  });
