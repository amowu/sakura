'use strict';

angular.module('sakuraApp')
  .controller('MainCtrl', function ($scope, $http, stellar) {
    stellar.window();
    $http.get('data/guides.json').success(function(data) {
      $scope.guides = data;
    });
  });
