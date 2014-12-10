'use strict';

/**
 * @ngdoc function
 * @name sampleNgFrontendApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the sampleNgFrontendApp
 */
angular.module('sampleNgFrontendApp').controller('HeaderCtrl', function ($scope, $http, $location, $routeParams, authenticate, LOGOUT_URL) {

  $scope.login = function() {
    authenticate.loginPage();
  };

  $scope.logout = function() {
    $http.get(LOGOUT_URL).success(function(){
      authenticate.logout();
    });
  };

  $scope.userName = authenticate.getUserName();

});
