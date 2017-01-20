(function() {

  'use strict';

  angular.module('viz.client.authentication', [])

    .config(function($stateProvider) {
      $stateProvider
        .state('clientauthentication', {
          url: '/client-authentication',
          templateUrl: 'partials/clients/authentication/partials/client-authentication',
          controller: 'ClientAuthenticationController',
          controllerAs: 'clientAuthentication'
        });
    });

})();
