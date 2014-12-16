angular.module('sampleNgFrontendApp')
  .controller('edicaoVeiculoCtrl', function ($scope, $routeParams, veiculoService, growl, $location) {
    var placa = $routeParams.placa;
    veiculoService.loadVeiculo(placa)
      .success(function (veiculo) {
        $scope.veiculo = veiculo;
      });

    $scope.updateVeiculo = function(veiculo) {
      veiculoService.updateVeiculo(veiculo)
        .success(function () {
          $location.path('veiculos');
          growl.success('Veículo atualizado com sucesso.');
        });
    };
  });