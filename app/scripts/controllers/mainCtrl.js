'use strict';

/**
 * @ngdoc function
 * @name sampleNgFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleNgFrontendApp
 */
angular.module('sampleNgFrontendApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams, $window) {

    console.log(window.location.search);

    if( window.location.search ) {
      $http.get('https://localhost:8443/cas/serviceValidate' + window.location.search + '&service=https://localhost:8443/sample/app/')
        .success(function () {
          $window.sessionStorage.ticket = window.location.search;
          console.log(arguments);
        })
        .error(function () {
          console.log(arguments);
        });
    }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
