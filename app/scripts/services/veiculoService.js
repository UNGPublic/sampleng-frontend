'use strict';

angular.module('sampleNgFrontendApp').service('veiculoService', function($http, BACKEND_URL){

  this.loadVeiculos = function() {
    return $http.get(BACKEND_URL + 'veiculo');
  };

  this.insertVeiculo = function(veiculo) {
    return $http.post(BACKEND_URL + 'veiculo', veiculo);
  };

  this.updateVeiculo = function(veiculo) {
    return $http.put(BACKEND_URL + 'veiculo', veiculo);
  };

  this.deleteVeiculo = function(veiculo) {
    return $http.delete(BACKEND_URL + 'veiculo/'+ veiculo.placa);
  };

  this.loadVeiculo = function(placa) {
    return $http.get(BACKEND_URL + 'veiculo/' + placa);
  };

});
