'use strict';

describe('Controller: listagemVeiculosCtrl', function () {

  beforeEach(module('sampleNgFrontendApp'));

  var listagemVeiculosCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
	 $httpBackend = $injector.get('$httpBackend');
	$httpBackend.when('GET', 'http://localhost:18080/sample/res/veiculo')
      .respond([{nuPlaca:'123'},{nuPlaca:'321'}]);
    listagemVeiculosCtrl = $controller('listagemVeiculosCtrl', {$scope: scope});
  }));

  it('Deve carregar 2 veiculos', function () {
   scope.loadVeiculos();
	 $httpBackend.flush();
	 expect(scope.veiculos.length).toBe(2);
  });

});
