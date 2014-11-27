'use strict';

angular.module('sampleNgFrontendApp').factory('errorHandlerInterceptor', function($q, growl, BACKEND_URL){
  return{

    request : function(config) {
        if (config.url.indexOf(".") == -1) {
          config.url = BACKEND_URL + config.url
        }
        return config;
    },

    requestError : function(rejection) {
      //TODO: trabalhar com mensagem de erro ou retry (estilo gmail)
      return rejection;
    },

    responseError : function(rejection) {

      if( rejection.status === 400 ) { // é um erro tratado pela aplicação.
        growl.warning(rejection.data);
        return $q.reject(rejection);
      }

      if( rejection.status === 404 ) { // recurso indisponível ou consulta sem resultado.
        growl.warning('Você tentou acessar um recurso indisponível');
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

angular.module('sampleNgFrontendApp').config(function($httpProvider){
  $httpProvider.interceptors.push('errorHandlerInterceptor');
});
