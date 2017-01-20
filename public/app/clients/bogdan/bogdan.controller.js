(function () {

  'use strict';

  angular
    .module('viz.client.bogdan')
    .controller('BogdanController', BogdanController);

  BogdanController.$inject = [
    'socket',
    'localStorageService',
    '$state'
  ];

  function BogdanController(socket, localStorageService, $state) {
    var agentSession = this;

    agentSession.group = localStorageService.get('account')[0].group;
    agentSession.sendMessage = sendMessage;

    function sendMessage() {
      socket.emit('message', agentSession.group);
    }

    socket.on('show-message', function(data) {
      console.log(data);
    });
  }

})();
