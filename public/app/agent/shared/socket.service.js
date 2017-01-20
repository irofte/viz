(function() {

  'use strict';

  angular
    .module('viz.agent.shared')
    .factory('socket', socket);

    socket.$inject = [
      '$rootScope',
      'localStorageService'
    ];

    function socket($rootScope, localStorageService) {
      var socket = io.connect('http://localhost:3030');

      socket.on('connect', function(data) {
        var account = localStorageService.get('account');

        if (account) {
          socket.emit('accountReconnected', account);
        }
      });

      return {
        on: on,
        emit: emit
      };

      function on(eventName, callback) {
        socket.on(eventName, function(data) {
          var args = arguments;

          $rootScope.$apply(function() {
            callback.apply(socket, args);
          });
        });
      }

      function emit(eventName, data, callback) {
        socket.emit(eventName, data, function(data) {
          var args = arguments;

          $rootScope.$apply(function() {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        });
      }
    }

})();
