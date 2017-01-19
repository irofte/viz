(function() {

  angular.module('viz.agent.account', [])

    .config(function($stateProvider) {
      $stateProvider
        .state('authenticate', {
          url: '/',
          templateUrl: 'partials/agent/account/partials/authenticate',
          controller: 'AccountController',
          controllerAs: 'account'
        })

        .state('forgot-password', {
          url: '/forgot-password',
          templateUrl: 'partials/account/partials/forgot-password',
          controller: 'AccountController',
          controllerAs: 'account'
        })

        .state('reset-password', {
          url: '/reset-password',
          templateUrl: 'partials/account/partials/reset-password',
          controller: 'AccountController',
          controllerAs: 'account'
        });
    });

})();
