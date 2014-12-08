'use strict';

angular.module('sampleNgFrontendApp').factory('errorHandlerInterceptor', function($q,$window,growl,authenticate){
  return{

    request: function(config) {
      return config;
    },
    requestError : function(rejection) {
      //TODO: ver o que fazer nestes casos
      return rejection;
    },
    responseError : function(rejection) {

      if( rejection.status === 401 ) { // usuário não autenticado
        authenticate.loginPage();
        return $q.reject(rejection);
      }

      if( rejection.status === 400 ) { // é um erro tratado pela aplicação.
        growl.warning(rejection.data);
        return $q.reject(rejection);
      }

      if( rejection.status === 404 ) { // recurso indisponível ou consulta sem resultado.
        growl.warning('Você tentou acessar um recurso indisponível.');
        return $q.reject(rejection);
      }

      if( rejection.status >= 500) { // é um erro desconhecido
        growl.error('Erro desconhecido.');
        return $q.reject(rejection);
      }

       return $q.reject(rejection);

    }
  };
});
