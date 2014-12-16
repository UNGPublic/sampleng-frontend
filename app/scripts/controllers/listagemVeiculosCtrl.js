angular.module('sampleNgFrontendApp')
  .controller('listagemVeiculosCtrl', function ($scope, veiculoService, growl) {
    $scope.loadVeiculos = function() {
      veiculoService.loadVeiculos()
        .success(function (veiculos) {
          $scope.veiculos = veiculos;
        });
    };
    $scope.loadVeiculos();

    $scope.deleteVeiculo = function(veiculo) {
      veiculoService.deleteVeiculo(veiculo)
        .success(function () {
          $scope.loadVeiculos();
          growl.success('Veículo removido com sucesso.');
      });
    };
  });