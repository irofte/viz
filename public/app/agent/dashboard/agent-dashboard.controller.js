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

    agentDashboard.account = localStorageService.get('account')[0].group;

    // socket.emit('join', {
    //
    // })
  }

})();
