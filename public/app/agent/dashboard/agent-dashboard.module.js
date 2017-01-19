(function () {
  'use strict';

  angular
    .module('viz.agent.dashboard', [])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
      .state('agent.dashboard', {
        url:'/dashboard',
        controller: 'AgentDashboardController',
        controllerAs: 'agentDashboard',
        templateUrl: 'partials/admin/dashboard/partials/admin-dashboard.jade'
      });
  }

})();
