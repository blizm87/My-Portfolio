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

  });
})();
