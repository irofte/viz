(function () {

  'use strict';

  angular
    .module('viz.agent', [
      'viz.agent.dashboard',
      'viz.agent.bogdan'
    ])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
      .state('agent', {
        abstract: true,
        url: '/agent',
        templateUrl: 'partials/agent/partials/agent',
        controller: 'AgentController',
        controllerAs: 'agent',
        resolve: {
          auth: auth
        }
      });

    function auth(AuthorizationService) {
      return AuthorizationService.authorizeAuthenticatedAccount();
    }
  }

})();
