(function () {

  'use strict';

  angular
    .module('viz.agent.session.bogdan')
    .controller('AgentBogdanController', AgentBogdanController);

  AgentBogdanController.$inject = [
    'socket',
    'localStorageService',
    '$state'
  ];

  function AgentBogdanController(socket, localStorageService, $state) {
    var agentSession = this;

    agentSessionBogdan.group = localStorageService.get('account')[0].group;
    agentSessionBogdan.sendMessage = sendMessage;

    function sendMessage() {
      socket.emit('message', agentSessionBogdan.group);
    }

    socket.on('show-message', function(data) {
      console.log(data);
    });
  }

})();
