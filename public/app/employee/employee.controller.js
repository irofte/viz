(function() {
  'use strict';

  angular
    .module('pentapark.employee')
    .controller('EmployeeController', EmployeeController);

  function EmployeeController($http) {
    var employee = this;

    employee.$onInit = activate;
    employee.users = '';

    function activate() {
      var URL = 'http://localhost:3030/api/users';

      $http
        .get(URL)
        .then(resolveActivate);

      function resolveActivate(data) {
        console.log(data);
        employee.users = data.data;
      }
    }
  }

})();
