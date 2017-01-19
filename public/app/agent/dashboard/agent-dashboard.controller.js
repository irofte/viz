(function () {
  'use strict';
  angular
    .module('viz.agent.dashboard')
    .controller('AgentDashboardController', AgentDashboardController);

  function AgentDashboardController() {
    var agentDashboard = this;

    agentDashboard.test = 'This is agent dashboard';
  }

})();
