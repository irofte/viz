(function() {
  'use strict';

  angular
    .module('viz.agent.account')
    .controller('AccountController', AccountController);

    AccountController.$inject = [
      '$socket',
      '$http',
      'localStorageService',
      '$state',
      'notify'
    ];

    function AccountController($socket, $http, localStorageService, $state, notify) {
      var account = this;

      account.submit = submit;

      function submit(valid) {
        if (!valid) {
          return;
        }

        var URL = 'http://localhost:3030/api/login';

        $http
          .post(URL, account.user)
          .then(resolveSubmit)
          .catch(resolveError);

        function resolveSubmit(response) {
          var account = response.data;

          account.type = 'agent';

          localStorageService.set('account', account);

          $socket.emit('identify', account);

          $state.go('agent.dashboard');
        }

        function resolveError(error) {
          notify.message(error.data, 'error');
        }
      }
    }

})();
