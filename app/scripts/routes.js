angular.module('sampleNgFrontendApp').config(function ($routeProvider) {
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
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
