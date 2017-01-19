(function() {
  'use strict';

  angular
    .module('pentapark.admin.users')
    .controller('AdminUsersController', AdminUsersController);

  AdminUsersController.$inject = ['$http'];

  function AdminUsersController($http) {
    var adminUsers = this;

    adminUsers.fetchUsers = fetchUsers;

    init();

    function init() {
      adminUsers.fetchUsers();
    }

    function fetchUsers() {
      var URL = 'http://localhost:3030/api/users';

      $http
        .get(URL)
        .then(resolveFetchUsers);

      function resolveFetchUsers(data) {
        console.log(data);

        adminUsers.users = data.data;
      }
    }
  }

})();
