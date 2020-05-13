(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://peaceful-wave-01191.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
