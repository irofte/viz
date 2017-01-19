(function () {
  'use strict';

  angular
    .module('pentapark.admin.dashboard', [])
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
