angular.module('sampleNgFrontendApp')
    .factory('loadingSpinnerInterceptor', ['$q', '$rootScope', '$log', function($q, $rootScope, $log) {
        var loadingCount = 0;
        return {
            request: function(config) {
                loadingCount++;
                $rootScope.$broadcast("showLoading");
                return config || $q.when(config);
            },
            response: function(response) {
                if ((--loadingCount) === 0) {
                    $rootScope.$broadcast("hideLoading");
                }
                return response || $q.when(response);
            },
            responseError: function(response) {
                if (!(--loadingCount)) {
                    $rootScope.$broadcast("hideLoading");
                }
                $rootScope.$broadcast('serverError', response.data);
                return $q.reject(response);
            }
        };
    }]);