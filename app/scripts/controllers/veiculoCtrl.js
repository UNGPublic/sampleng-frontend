'use strict';

/**
 * @ngdoc function
 * @name sampleNgFrontendApp.controller:VeiculoCtrl
 * @description
 * # VeiculoCtrl
 * Controller of the sampleNgFrontendApp
 */
angular.module('sampleNgFrontendApp').controller('VeiculoCtrl', function ($scope,$routeParams, $location, veiculoService, growl) {

  $scope.loadVeiculos = function() {

    veiculoService.loadVeiculos()
      .success(function (veiculos) {
        $scope.veiculos = veiculos;
      });
  };

  $scope.insertVeiculo = function(veiculo) {
    veiculoService.insertVeiculo(veiculo)
      .success(function () {
        growl.success('Veículo cadastrado com sucesso.');
      });
  };

  $scope.updateVeiculo = function(veiculo) {
    veiculoService.updateVeiculo(veiculo)
      .success(function () {
        growl.success('Veículo atualizado com sucesso.');
      });
  };

  $scope.deleteVeiculo = function(veiculo) {

    veiculoService.deleteVeiculo(veiculo)
      .success(function () {
        $scope.loadVeiculos();
        growl.success('Veículo removido com sucesso.');
      });

  };

  $scope.loadVeiculo = function() {

    var placa = $routeParams.placa;

    veiculoService.loadVeiculo( placa)
      .success(function (veiculo) {
        $scope.veiculo = veiculo;
      });
  };

  $scope.voltarVeiculos = function() {
    $location.path('veiculos');
  };

});
