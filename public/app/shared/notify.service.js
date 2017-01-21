(function() {

  'use strict';

  angular
    .module('viz.shared')
    .factory('notify', notify);

  function notify($timeout) {
    var defaultDuration = 3000;
    var container = document.body;

    function message(message, type) {
      var element = document.createElement('div');

      element.innerHTML = message;

      element.className = type;

      container.appendChild(element);

      $timeout(function() {
        destroyElement(element);
      }, defaultDuration);
    }

    function destroyElement(element) {
      container.removeChild(element);
    }

    return {
      message: message
    };
  }

})();
