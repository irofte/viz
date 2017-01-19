(function () {
  'use strict';
  angular
    .module('viz.admin')
    .controller('AdminController', AdminController);

  function AdminController() {
   var admin = this;

   admin.test = 'Administration Test';
  }

})();
