angular.module('sampleNgFrontendApp').provider('authenticate', function () {

  var config = {
  };

  this.setConfig = function (configuration) {
    config = configuration;
  };

  this.$get = function ($window, $rootScope) {

    return {
      login: function (username, password) {
          console.log('Não implementado.');
/*
        var defer = $q.defer();
        $http({
          url: 'https://192.168.33.10:8443/cas/login',
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          data: {
            username: username,
            password: password
          }
        }).success(function (data) {
          $window.sessionStorage = data; // registrando o token
        }).error(function () {
          console.log('erro de autenticacao', arguments);
          defer.reject();
        });
*/
        return defer.promise;
      },

      logout: function () {
        return defer.promise;
      },

      loginPage : function() {
        console.log('nao logado!');
        $window.location.href = '/cas/login?service=https://localhost:8443/sample/app/';
      }

    };
  };
});
