'use strict';

/**
 * @ngdoc function
 * @name sampleNgFrontendApp.controller:VeiculoCtrl
 * @description
 * # VeiculoCtrl
 * Controller of the sampleNgFrontendApp
 */
var veiculoFormCtrl = angular.module('sampleNgFrontendApp').controller('VeiculoFormCtrl', function ($scope,$routeParams, $location, veiculoService, growl, formData) {
  $scope.veiculo = formData.data;

  $scope.save = function(veiculo) {
    veiculoService.insertVeiculo(veiculo)
    .success(function () {
      if (formData.data) {
          growl.success('Veículo atualizado com sucesso.');
      } else {
        growl.success('Veículo cadastrado com sucesso.');
      }
    });
  };
  
  $scope.voltarVeiculos = function() {
    $location.path('veiculos');
  };

});

veiculoFormCtrl.resolveNew = {
    formData: function() { 
      return {data : null};
    }
}

veiculoFormCtrl.resolveEdit = {
  formData: function($q, $route, veiculoService) { 
    return veiculoService.loadVeiculo($route.current.params.placa); 
  }
};