'use strict';

/**
 * @ngdoc function
 * @name scaffoldingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scaffoldingApp
 */
angular.module('scaffoldingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
