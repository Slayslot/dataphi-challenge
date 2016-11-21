(function() {
  'use strict';

  angular
    .module('dataphi')
    .controller('ListController', ListCtrlFunction);

  /** @ngInject */
  function ListCtrlFunction($log, ListService) {
    var vm = this;
    ListService.fetch().then(function(response){
      vm.patients = response.data;
    });
  }
})();
