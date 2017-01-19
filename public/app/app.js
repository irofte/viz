(function () {
  'use strict';

  var socket = io.connect('http://localhost:3030');

  socket.on('news', function (data) {
    // console.log('aaa', data);
    socket.emit('my other event', { my: 'this is from client' });
  });

  angular
    .module('viz', [
      'ui.router',
      'LocalStorageModule',
      'viz.shared',
      'viz.agent.account',
      'viz.agent.authorization',
      'viz.agent'
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
