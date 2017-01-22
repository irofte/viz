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
    var bogdan = this;

    bogdan.username = localStorageService.get('account').username;

    socket.on('show-message', function(data) {
      console.log(data);
    });
  }

})();
