'use strict';

/**
 * @ngdoc function
 * @name sampleNgFrontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the sampleNgFrontendApp
 */
angular.module('sampleNgFrontendApp').controller('LoginSuccessCtrl', function ($scope, $window, $location, $routeParams, authenticate) {

  var ticket = $routeParams.ticket;
  var user = $routeParams.userName;

  authenticate.setAuthenticated(user, ticket);

  $location.path($window.sessionStorage.loginCallback);
  delete $window.sessionStorage.loginCallback;

});
