(function() {
  'use strict';

  angular
    .module('viz.agent.account')

    .controller('AccountController', AccountController);

    AccountController.$inject = ['$http'];

    function AccountController($http) {
      var account = this;

      account.submit = submit;


      function submit() {
        var URL = 'http://localhost:3030/api/login';

        $http
          .post(URL, account.user)
          .then(resolveSubmit);

        function resolveSubmit(data) {
          console.log(data);
        }
      }
    }

})();
