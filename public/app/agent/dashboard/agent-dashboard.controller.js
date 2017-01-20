(function () {

  'use strict';

  angular
    .module('viz.agent.dashboard')
    .controller('AgentDashboardController', AgentDashboardController);

  AgentDashboardController.$inject = [
    'socket',
    'localStorageService',
    '$state'
  ];

  function AgentDashboardController(socket, localStorageService, $state) {

    var agentDashboard = this;

    var account = localStorageService.get('account');

    agentDashboard.group = account.group;
    agentDashboard.username = account.username;
    agentDashboard.startSession = startSession;

    function startSession() {
      socket.emit('createGroup', account);

      $state.go('agent.' + agentDashboard.group);
    }
  }

})();
