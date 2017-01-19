(function () {
  angular
    .module('viz.employee', [])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
    .state('shared.employee', {
        url:'/employee',
        controller: 'EmployeeController',
        controllerAs: 'employee',
        templateUrl:'partials/employee/partials/employee'
    })
  }

})();
