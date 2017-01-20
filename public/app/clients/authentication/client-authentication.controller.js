(function() {

  'use strict';

  angular
    .module('viz.agent.account')
    .controller('ClientAuthenticationController', ClientAuthenticationController);

    ClientAuthenticationController.$inject = [
      'socket',
      'localStorageService',
      '$state'
    ];

    function ClientAuthenticationController(socket, localStorageService, $state) {
      var clientAuthentication = this;

      clientAuthentication.submit = submit;

      function submit() {
        socket.emit('clientConnect', clientAuthentication.client.session);

        openAgent();
      }

      function openAgent() {
        socket.on(clientAuthentication.client.session, function(agent) {
          $state.go('client.' + agent);
        });

        socket.on('sessionCodeError', function(agent) {
          console.log('erroooorrrrr');
        });
      }
    }

})();
