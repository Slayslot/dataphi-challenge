(function() {
  'use strict';

  angular
    .module('dataphi')
    .controller('AddController', AddCtrlFunction);

  /** @ngInject */
  function AddCtrlFunction($log, AddService, ProgressBarService) {
    var vm = this;
    vm.genderOptions = AddService.genders();

    vm.update = function(){
      ProgressBarService.load();
      AddService.update(vm.formdata);
    }

    ProgressBarService.stop();

  }
})();
