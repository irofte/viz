(function() {
  'use strict';

  angular
    .module('viz.agent.account')
    .controller('AccountController', AccountController);

    AccountController.$inject = [
      '$http',
      'localStorageService',
      '$state',
      'randomString',
      'notify'
    ];

    function AccountController($http, localStorageService, $state
      , randomString, notify) {

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
          var str = randomString(5);

          var account = response.data[0];

          account.clientHash = str;

          localStorageService.set('account', account);

          $state.go('agent.dashboard');
        }

        function resolveError(error) {
          notify.message(error.data, 'error');
        }
      }
    }

})();
