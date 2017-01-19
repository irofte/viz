(function () {

  'use strict';

  angular
    .module('viz.agent.dashboard')
    .controller('AgentDashboardController', AgentDashboardController);

  AgentDashboardController.$inject = [
    'socket',
    'localStorageService'
  ];

  function AgentDashboardController(socket, localStorageService) {
    var agentDashboard = this;

    var account = localStorageService.get('account')[0];

    agentDashboard.group = account.group;
    agentDashboard.username = account.username;

    socket.emit('createGroup', {
      groupName: agentDashboard.group
    })

    io('/' + agentDashboard.group);
  }

})();
