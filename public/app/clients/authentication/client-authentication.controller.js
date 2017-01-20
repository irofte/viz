(function() {

  'use strict';

  angular
    .module('viz.agent.account')
    .controller('ClientAuthenticationController', ClientAuthenticationController);

    ClientAuthenticationController.$inject = [
      'localStorageService',
      '$state'
    ];

    function ClientAuthenticationController(localStorageService, $state) {
      var clientAuthentication = this;

      clientAuthentication.submit = submit;

      function submit() {
        console.log('bla bla');
      }
    }

})();
