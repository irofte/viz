(function() {
  'use strict';

  angular
    .module('viz.agent')
    .controller('AgentController', AgentController);

    AgentController.$inject = [
      'localStorageService',
      '$state'
    ];

    function AgentController(localStorageService, $state) {
      var agent = this;

      agent.logout = logout;

      function logout() {
        localStorageService.remove('account');

        $state.go('authenticate');
      }
    }

})();
