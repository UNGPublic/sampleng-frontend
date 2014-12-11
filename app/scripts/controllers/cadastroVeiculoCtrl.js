angular.module('sampleNgFrontendApp')
  .controller('cadastroVeiculoCtrl', function ($scope, $location, growl, veiculoService) {
    $scope.insertVeiculo = function(veiculo) {
      veiculoService.insertVeiculo(veiculo)
        .success(function () {
          $location.path('/veiculos');
          growl.success('Veículo cadastrado com sucesso.');
        });
    };
  });