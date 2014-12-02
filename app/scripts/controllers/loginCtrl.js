'use strict';

/**
 * @ngdoc function
 * @name sampleNgFrontendApp.controller:VeiculoCtrl
 * @description
 * # VeiculoCtrl
 * Controller of the sampleNgFrontendApp
 */
angular.module('sampleNgFrontendApp').controller('LoginCtrl', function ($scope, $http, $location, authenticate, growl) {

  $scope.login = function(login) {

    authenticate.login(login.username, login.password);

  };

});
