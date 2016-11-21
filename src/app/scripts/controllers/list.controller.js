(function() {
  'use strict';

  angular
    .module('dataphi')
    .controller('ListController', ListCtrlFunction);

  /** @ngInject */
  function ListCtrlFunction($log, ListService, ProgressBarService) {
    var vm = this;
    ListService.fetch().then(function(response){
      vm.patients = response.data;
    });

    ProgressBarService.stop();
  }
})();
