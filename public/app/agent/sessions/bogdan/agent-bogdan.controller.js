(function () {

  'use strict';

  angular
    .module('viz.agent.bogdan')
    .controller('AgentBogdanController', AgentBogdanController);

  AgentBogdanController.$inject = [
    'socket',
    'localStorageService',
    '$state'
  ];

  function AgentBogdanController(socket, localStorageService, $state) {
    var agentBogdan = this;

    agentBogdan.group = localStorageService.get('account')[0].group;
    agentBogdan.sendMessage = sendMessage;

    function sendMessage() {
      socket.emit('message', agentBogdan.group);
    }

    socket.on('show-message', function(data) {
      console.log(data);
    });
  }

})();
