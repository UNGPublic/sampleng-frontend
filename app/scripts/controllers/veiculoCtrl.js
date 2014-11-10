'use strict';

/**
 * @ngdoc function
 * @name sampleNgFrontendApp.controller:VeiculoCtrl
 * @description
 * # VeiculoCtrl
 * Controller of the sampleNgFrontendApp
 */
angular.module('sampleNgFrontendApp').controller('VeiculoCtrl', function ($scope,$routeParams, $location, veiculoService) {

  $scope.loadVeiculos = function() {

    veiculoService.loadVeiculos()
      .success(function (veiculos) {
        $scope.veiculos = veiculos;
      })
      .error(function (data) {
        $scope.error = 'Erro ao consultar veículos.';
      });
  };

  $scope.insertVeiculo = function(veiculo) {
    veiculoService.insertVeiculo(veiculo)
      .success(function () {
        $scope.success = 'Veículo cadastrado com sucesso.';
      })
      .error(function () {
        $scope.error = 'Erro ao inserir veículo.';
      });
  };

  $scope.updateVeiculo = function(veiculo) {
    veiculoService.updateVeiculo(veiculo)
      .success(function () {
        $scope.success = 'Veículo atualizado com sucesso.';
      })
      .error(function () {
        $scope.error = 'Erro ao atualizar veículo.';
      });
  };

  $scope.deleteVeiculo = function(veiculo) {

    if(!confirm('Deseja realmente remover o veículo placa ' + veiculo.nuPlaca + '?')) {
      return;
    }

    veiculoService.deleteVeiculo(veiculo)
      .success(function () {
        $scope.loadVeiculos();
        $scope.success = 'Veículo removido com sucesso.';
      })
      .error(function () {
        $scope.error = 'Erro ao remover veículo.';
      });

  };

  $scope.loadVeiculo = function() {

    var nuPlaca = $routeParams.nuPlaca;

    veiculoService.loadVeiculo( nuPlaca)
      .success(function (veiculo) {
        $scope.veiculo = veiculo;
      })
      .error(function (data) {
        $scope.error = 'Erro ao consultar veículo.';
      });
  };

  $scope.voltarVeiculos = function() {
    $location.path('veiculos');
  };

});
