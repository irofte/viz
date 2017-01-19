(function() {
  'use strict';

  angular
    .module('viz.agent.account')
    .controller('AccountController', AccountController);

    AccountController.$inject = [
      '$http',
      'localStorageService',
      '$state'
    ];

    function AccountController($http, localStorageService, $state) {
      var account = this;

      account.submit = submit;

      function submit() {
        var URL = 'http://localhost:3030/api/login';

        $http
          .post(URL, account.user)
          .then(resolveSubmit)
          .catch(resolveError);

        function resolveSubmit(response) {
          localStorageService.set('account', response.data);

          $state.go('agent.dashboard');
        }

        function resolveError(error) {
          console.log('ERROR', error);
        }
      }
    }

})();
