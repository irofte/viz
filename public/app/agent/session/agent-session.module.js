(function () {

  'use strict';

  angular
    .module('viz.agent.session', [])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
      .state('agent.session', {
        url:'/session',
        controller: 'AgentSessionController',
        controllerAs: 'agentSession',
        templateUrl: 'partials/agent/session/partials/agent-session'
      });
  }

})();
