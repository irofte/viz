(function() {
  'use strict';

  angular
    .module('viz.agent')
    .controller('AgentController', AgentController);

    AgentController.$inject = [
      '$socket',
      'localStorageService',
      '$state'
    ];

    function AgentController($socket, localStorageService, $state) {
      var agent = this;

      var account = localStorageService.get('account');

      $socket.emit('identify', account);

      agent.logout = logout;

      function logout() {
        $socket.emit('agentLogout', account);

        localStorageService.remove('account');

        $state.go('authenticate');
      }
    }

})();
