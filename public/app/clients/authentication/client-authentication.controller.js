(function() {

  'use strict';

  angular
    .module('viz.agent.account')
    .controller('ClientAuthenticationController', ClientAuthenticationController);

    ClientAuthenticationController.$inject = [
      'socket',
      'localStorageService',
      '$state',
      'notify'
    ];

    function ClientAuthenticationController(socket, localStorageService, $state
      , notify) {

      var clientAuthentication = this;

      clientAuthentication.submit = submit;

      function submit(valid) {
        if (!valid) {
          return;
        }

        socket.emit('clientConnect', clientAuthentication.client.session);

        openAgent();
      }

      function openAgent(valid) {
        socket.on(clientAuthentication.client.session, function(agent) {
          var account = clientAuthentication.client;

          account.group = agent;

          localStorageService.set('account', account);

          $state.go('client.' + account.group);
        });

        socket.on('sessionCodeError', function(agent) {
          notify
            .message('The session code is invalid', 'error');
        });
      }
    }

})();
