(function() {

  angular
    .module('viz.agent.authorization')
    .factory('AuthorizationService', AuthorizationService);

    AuthorizationService.$inject = ['localStorageService', '$q'];

    function AuthorizationService(localStorageService, $q) {
      return {
        isAuthenticated: function() {
          return !!localStorageService.get('account');
        },
        authorizeCurrentAccountPermission: function(permission) {
          if (permission) {
            return true;
          } else {
            return $q.reject('no permission');
          }
        },
        authorizeAuthenticatedAccount: function() {
          if (this.isAuthenticated()) {
            return true;
          } else {
            return $q.reject('not authorized');
          }
        }
      };
    }

})();
