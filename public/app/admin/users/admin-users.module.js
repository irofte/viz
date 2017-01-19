(function () {
  'use strict';

  angular
    .module('pentapark.admin.users', [])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
      .state('admin.users', {
        url:'/users',
        controller: 'AdminUsersController',
        controllerAs: 'adminUsers',
        templateUrl: 'partials/admin/users/partials/admin-users.jade'
      });
  }

})();
