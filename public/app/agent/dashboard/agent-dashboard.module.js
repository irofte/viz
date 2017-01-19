(function () {

  'use strict';

  angular
    .module('viz.agent.dashboard', [])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
      .state('agent', {
        abstract: true,
        url: '/agent',
        templateUrl: 'partials/agent/dashboard/partials/agent',
        resolve: {
          auth: auth
        }
      })
      .state('agent.dashboard', {
        url:'/dashboard',
        controller: 'AgentDashboardController',
        controllerAs: 'agentDashboard',
        templateUrl: 'partials/agent/dashboard/partials/agent-dashboard'
      });

    function auth(AuthorizationService) {
      return AuthorizationService.authorizeAuthenticatedAccount();
    }
  }

})();
