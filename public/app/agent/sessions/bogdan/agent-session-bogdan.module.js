(function () {

  'use strict';

  angular
    .module('viz.agent.session.bogdan', [])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
      .state('agent.bogdan', {
        url:'/agent-bogdan',
        controller: 'AgentBogdanController',
        controllerAs: 'agentBogdan',
        templateUrl: 'partials/agent/sessions/bogdan/partials/agent-session-bogdan.jade'
      });
  }

})();
