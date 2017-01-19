(function() {
  'use strict';

  angular
    .module('viz.admin', [
      'viz.admin.dashboard',
      'viz.admin.users'
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
