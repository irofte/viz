(function () {
  'use strict';

  angular
    .module('viz.admin.users', [])
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
