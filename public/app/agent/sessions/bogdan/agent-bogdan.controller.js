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

    var agent = localStorageService.get('account');

    agentBogdan.group = agent.group;
    agentBogdan.sendMessage = sendMessage;

    function sendMessage() {
      socket.emit('message', agentBogdan.group);
    }

    socket.on('show-message', function(data) {
      console.log(data);
    });
  }

})();
