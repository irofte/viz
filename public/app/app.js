(function () {

  'use strict';

  angular
    .module('viz', [
      'ui.router',
      'LocalStorageModule',
      'angularRandomString',
      'ngMessages',
      'viz.shared',
      'viz.idle',
      'viz.agent.shared',
      'viz.agent.account',
      'viz.agent.authorization',
      'viz.agent',
      'viz.clients'
    ])
    .config(configSetup)
    .run(runSetup);

  function configSetup($locationProvider, $urlRouterProvider
    , $socketProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $socketProvider.setConnectionUrl('http://localhost:3030');
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
