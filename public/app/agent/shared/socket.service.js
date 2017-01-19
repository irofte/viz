(function() {

  'use strict';

  angular
    .module('viz.agent.shared')
    .factory('socket', socket);

    socket.$inject = ['$rootScope'];

    function socket($rootScope) {
      var socket = io.connect('http://localhost:3030');

      return {
        on: on,
        emit: emit
      };

      function on(eventName, callback) {
        socket.on(eventName, news);

        function news(data) {
          var args = arguments;

          $rootScope.$apply(function() {
            callback.apply(socket, args);
          })
        }
      }

      function emit(eventName, data, callback) {
        socket.emit(eventName, data, news);

        function news(data) {
          var args = arguments;

          $rootScope.$apply(function() {
            if (callback) {
              callback.apply(socket, args);
            }
          })
        }
      }
    }

})();
