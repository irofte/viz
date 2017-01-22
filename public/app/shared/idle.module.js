
(function() {

  'use strict';

  angular
    .module('viz.idle', [])
    .run(idle);

  idle.$inject = [
    '$rootScope',
    '$timeout',
    '$document'
  ];

  function idle($rootScope, $timeout, $document) {
    console.log('starting run');

    var allowedIdle = 5000;

    var checkIdle = $timeout(function() {
      LogoutByTimer()
    }, allowedIdle);

    var body = angular.element($document);

    var events = [
      'keydown',
      'keyup',
      'click',
      'mousemove',
      'DOMMouseScroll',
      'mousewheel',
      'mousedown',
      'touchstart',
      'touchmove',
      'scroll',
      'focus'
    ];

    events.forEach(function(eventName) {
      body.bind(eventName, function(e) {
        resetTimeout(e);
      });
    });

    function LogoutByTimer() {
      console.log('Logout');
    }

    function resetTimeout(e) {
      // console.log(e);

      $timeout.cancel(checkIdle);

      checkIdle = $timeout(function() {
        LogoutByTimer()
      }, allowedIdle);
    }
  }

})();
