angular.module('sampleNgFrontendApp').provider('authenticate', function () {

  this.setConfig = function (configuration) {
    config = configuration;
  };

  this.$get = ["$window", "$rootScope", "$location", "LOGIN_URL", "LOGOUT_URL",
      function ($window, $rootScope, $location, LOGIN_URL, LOGOUT_URL) {

    return {

        logout: function () {
            $window.sessionStorage.removeItem('auth');
            delete $rootScope.auth;
        },

        loginPage : function() {
            $window.sessionStorage.setItem('loginCallback', $location.path());
            $window.location.href = LOGIN_URL;
        },

        isAuthenticated : function() {

            if( !$rootScope.auth ) {

                var auth = $window.sessionStorage.getItem('auth');

                if( auth ) {
                    this.setAuthenticated(auth.userName, auth.ticket);
                    return true;
                }

                return false;
            }

            return $rootScope.auth && $rootScope.auth.userName;

        },

        setAuthenticated : function(user, ticket) {
            if(user &&  ticket) {
                var auth = {userName: user, ticket: ticket};
                $window.sessionStorage.setItem('auth', auth);
                $rootScope.auth = auth; // adiciona no rootscope para não consultar o sessionStorage com frequência.
            }
        },

        getUserName : function() {
            if(this.isAuthenticated()) {
                var auth = this.getAuthInfo();
                if( auth ) {
                    return auth.userName;
                }
            }
            return null;
        },

        getAuthInfo : function() {

            if($rootScope.auth) {
                return $rootScope.auth;
            }
            var authSession = $window.sessionStorage.getItem('auth');

            if(authSession) {
                if( authSession.userName ) {
                    $rootScope.auth = authSession;
                    return this.getAuthInfo();
                }
            }

            return null;

        }

    };
  }];
});
