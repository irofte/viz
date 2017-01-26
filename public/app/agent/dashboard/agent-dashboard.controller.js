(function () {

  'use strict';

  angular
    .module('viz.agent.dashboard')
    .controller('AgentDashboardController', AgentDashboardController);

  AgentDashboardController.$inject = [
    '$socket',
    'localStorageService',
    '$state',
    'randomString'
  ];

  function AgentDashboardController($socket, localStorageService, $state
    , randomString) {

    var agentDashboard = this;

    var account = localStorageService.get('account');

    agentDashboard.group = account.group;
    agentDashboard.username = account.username;
    agentDashboard.startSession = startSession;

    function startSession() {
      var str = randomString(15);
      console.log(str);

      account.clientHash = str;

      localStorageService.set('account', account);

      $socket.emit('startSession', account);

      $state.go('agent.' + agentDashboard.group);
    }
  }

})();
