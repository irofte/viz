(function () {
  'use strict';
  angular
    .module('pentapark.admin')
    .controller('AdminController', AdminController);

  function AdminController() {
   var admin = this;

   admin.test = 'Administration Test';
  }

})();
