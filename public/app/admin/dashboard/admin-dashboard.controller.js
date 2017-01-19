(function () {
  'use strict';
  angular
    .module('viz.admin.dashboard')
    .controller('AdminDashboardController', AdminDashboardController);

  function AdminDashboardController() {
    var adminDashboard = this;

    adminDashboard.test = 'This is admin dashboard';
  }

})();
