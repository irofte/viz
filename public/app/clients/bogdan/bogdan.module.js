(function () {

  'use strict';

  angular
    .module('viz.client.bogdan', [])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
      .state('client.bogdan', {
        url:'/bogdan',
        controller: 'BogdanController',
        controllerAs: 'bogdan',
        templateUrl: 'partials/clients/bogdan/partials/bogdan'
      });
  }

})();
