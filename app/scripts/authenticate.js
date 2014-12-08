angular.module('sampleNgFrontendApp').provider('authenticate', function () {

  var config = {};

  this.setConfig = function (configuration) {
    config = configuration;
  };

  this.$get = function ($window, $rootScope, $location, LOGIN_URL, LOGOUT_URL) {

    return {

        logout: function () {
            delete $window.sessionStorage.auth;
            delete $rootScope.auth;
            $window.location.href = LOGOUT_URL;
        },

        loginPage : function() {
            $window.sessionStorage.loginCallback = $location.path();
            $window.location.href = LOGIN_URL;
        },

        isAuthenticated : function() {

            if( !$rootScope.auth ) {

                var auth = $window.sessionStorage.auth;

                if( auth ) {
                    this.setAuthenticated($window.sessionStorage.auth.userName, $window.sessionStorage.auth.ticket);
                    return true;
                }

                return false;
            }

            return $rootScope.auth && $rootScope.auth.userName;

        },

        setAuthenticated : function(user, ticket) {
            if(user &&  ticket) {
                var auth = {userName: user, ticket: ticket};
                $window.sessionStorage.auth = auth;
                $rootScope.auth = auth; // adiciona no rootscope para não consultar o sessionStorage com frequência.
            }
        },

        getUserName : function() {
            if(this.isAuthenticated()) {
                return $rootScope.auth.userName;
            }
            return null;
        }

    };
  };
});
