(function () {
  'use strict';

  angular
    .module('viz.admin.dashboard', [])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
      .state('admin.dashboard', {
        url:'/dashboard',
        controller: 'AdminDashboardController',
        controllerAs: 'adminDashboard',
        templateUrl: 'partials/admin/dashboard/partials/admin-dashboard.jade'
      });
  }

})();
