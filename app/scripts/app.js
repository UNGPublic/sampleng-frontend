'use strict';

/**
 * @ngdoc overview
 * @name sampleNgFrontendApp
 * @description
 * # sampleNgFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('sampleNgFrontendApp', ['ngRoute','angular-growl'])
  .config(function(growlProvider) {
    growlProvider.onlyUniqueMessages(false);
    growlProvider.globalTimeToLive(5000);
  });

angular.module('sampleNgFrontendApp').config(function($httpProvider){
    $httpProvider.interceptors.push('errorHandlerInterceptor');
    $httpProvider.interceptors.push('hostAddressInterceptor');
});
