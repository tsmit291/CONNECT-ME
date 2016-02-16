'use strict';

/**
 * @ngdoc overview
 * @name scaffoldingApp
 * @description
 * # scaffoldingApp
 *
 * Main module of the application.
 */
angular
  .module('scaffoldingApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
