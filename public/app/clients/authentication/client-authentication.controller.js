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

        var account = clientAuthentication.client;

        account.type = 'client';

        socket.emit('identify', account);

        // openAgent();
      }

      function openAgent(valid) {
        socket.on(clientAuthentication.client.session, function(agent) {


          account.group = agent;
          account.type = 'client';

          localStorageService.set('account', account);

          $state.go('client.' + account.group);
        });

        socket.on('sessionCodeError', function(agent) {
          notify.message('The session code is invalid', 'error');
        });
      }
    }

})();
