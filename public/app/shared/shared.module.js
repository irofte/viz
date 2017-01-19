(function () {
  angular
    .module('pentapark.shared', [])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
    .state('shared', {
      abstract: true,
      controller: 'SharedController',
      controllerAs: 'shared',
      templateUrl: 'partials/shared/partials/shared'
    });
  }

})();
