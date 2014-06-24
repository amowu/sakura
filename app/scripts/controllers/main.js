'use strict';

angular.module('sakuraApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('data/guides.json').success(function(data) {
      $scope.guides = data;
    });
    $http.get('data/history.json').success(function(data) {
      $scope.history = data;
    });
  });
