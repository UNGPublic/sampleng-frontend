'use strict';

angular.module('sampleNgFrontendApp').factory('hostAddressInterceptor', function($q, BACKEND_URL){
    return{
        request: function(config) {

            if( config.url.indexOf('html') > -1) {
                return config;
            }

            config.url = BACKEND_URL + config.url;

            return config;

        }
    };
});