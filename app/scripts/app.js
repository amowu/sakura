'use strict';

angular.module('sakuraApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'pascalprecht.translate',
  'angular-parallax'
])
  .config(function ($routeProvider, $locationProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/2014'
      })
      .when('/2014', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/2014'
      });

    $locationProvider.html5Mode(true);

    $translateProvider.useStaticFilesLoader({
      prefix: 'i18n/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('zh_TW');
  });
