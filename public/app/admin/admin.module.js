(function() {
  'use strict';

  angular
    .module('pentapark.admin', [
      'pentapark.admin.dashboard',
      'pentapark.admin.users'
    ])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
      .state('admin', {
        abstract: true,
        url: '/admin',
        controller: 'AdminController',
        controllerAs: 'admin',
        templateUrl: 'partials/admin/partials/admin'
      });
  }

})();
