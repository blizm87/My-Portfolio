(function() {
'use strict';

// all code will go in here...

angular.module('myApp', []) // first defined module
  .config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('//');
    $interpolateProvider.endSymbol('//');
  })

  .controller('MainController', function(){
    var vm = this;
    vm.title = 'My first ng';
    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink'),
        content  = document.getElementById('main');
    function toggleClass(element, className) {
      var classes = element.className.split(/\s+/),
          length = classes.length,
          i = 0;
      for(; i < length; i++) {
        if (classes[i] === className) {
          classes.splice(i, 1);
          break;
        }
      }
      // The className is not found
      if (length === classes.length) {
          classes.push(className);
      }
      element.className = classes.join(' ');
    }

    function toggleAll(e) {
      var active = 'active';
      e.preventDefault();
      toggleClass(layout, active);
      toggleClass(menu, active);
      toggleClass(menuLink, active);
    }
    menuLink.onclick = function (e) {
        toggleAll(e);
    }
    content.onclick = function(e) {
      if (menu.className.indexOf('active') !== -1) {
          toggleAll(e);
      }
    };
  });
})();
