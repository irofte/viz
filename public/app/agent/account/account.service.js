(function() {

  angular.module('viz.agent.account')

    .factory('accountService', AccountService);

    function AccountService() {
      return {
        authenticate: function() {
        },
        logout: function() {
        },
        forgotPassword: function() {
        },
        resetPassword: function() {
        }
      };
    }

})();
