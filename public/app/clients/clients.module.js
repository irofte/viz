(function() {

  'use strict';

  angular
    .module('viz.clients', [
      'viz.client.authentication',
      'viz.client.bogdan'
    ])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
      .state('client', {
        abstract: true,
        url: '/client',
        templateUrl: 'partials/clients/partials/clients'
        // resolve: {
        //   auth: auth
        // }
      });

    function auth(AuthorizationService) {
      return AuthorizationService.authorizeAuthenticatedAccount();
    }
  }

})();
