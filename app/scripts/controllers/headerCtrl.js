'use strict';

/**
 * @ngdoc function
 * @name sampleNgFrontendApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the sampleNgFrontendApp
 */
angular.module('sampleNgFrontendApp').controller('HeaderCtrl', function ($scope, $http, $location, $routeParams, authenticate) {

  $scope.login = function() {
    authenticate.loginPage();
  };

  $scope.logout = function() {
    authenticate.logout();
  };

  $scope.userName = authenticate.getUserName();

});
