'use strict';

/**
 * @ngdoc overview
 * @name sampleNgFrontendApp
 * @description
 * # sampleNgFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('sampleNgFrontendApp', ['ngRoute','angular-growl'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/veiculos', {
        templateUrl: 'views/veiculos.html',
        controller: 'VeiculoListCtrl'
      })
      .when('/cadastroVeiculo', {
        templateUrl: 'views/cadastroVeiculo.html',
        controller: 'VeiculoFormCtrl',
        resolve : veiculoFormCtrl.resolveNew
      })
      .when('/edicaoVeiculo/:placa', {
        templateUrl: 'views/cadastroVeiculo.html',
        controller: 'VeiculoFormCtrl',
        resolve : veiculoFormCtrl.resolveEdit
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(growlProvider) {
    growlProvider.onlyUniqueMessages(false);
    growlProvider.globalTimeToLive(5000);
  });
