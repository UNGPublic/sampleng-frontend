angular.module('sampleNgFrontendApp').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/veiculos', {
      templateUrl: 'views/listagemVeiculos.html',
      controller: 'listagemVeiculosCtrl'
    })
    .when('/cadastroVeiculo', {
      templateUrl: 'views/cadastroVeiculo.html',
      controller: 'cadastroVeiculoCtrl'
    })
    .when('/edicaoVeiculo/:placa', {
      templateUrl: 'views/edicaoVeiculo.html',
      controller: 'edicaoVeiculoCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
