(function () {
  'use strict';

  angular
    .module('viz', [
      'ui.router',
      'LocalStorageModule',
      'viz.agent.shared',
      'viz.agent.account',
      'viz.agent.authorization',
      'viz.agent',
      'viz.clients'
    ])
    .config(configSetup)
    .run(runSetup);

  function configSetup($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
  }

  function runSetup($rootScope, $state) {
    $rootScope
      .$on('$stateChangeError', callback);

    function callback(event, toState, toParams, fromState, fromParams, error) {
      event.preventDefault();

      if (error === 'not authorized') {
        $state.go('authenticate');
      }
    }
  }

})();
