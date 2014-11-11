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
  .module('sampleNgFrontendApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/veiculos', {
        templateUrl: 'views/veiculos.html',
        controller: 'VeiculoCtrl'
      })
      .when('/cadastroVeiculo', {
        templateUrl: 'views/cadastroVeiculo.html',
        controller: 'VeiculoCtrl'
      })
      .when('/edicaoVeiculo/:placa', {
        templateUrl: 'views/edicaoVeiculo.html',
        controller: 'VeiculoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
