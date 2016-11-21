(function() {
  'use strict';

  angular
    .module('dataphi')
    .controller('AddController', AddCtrlFunction);

  /** @ngInject */
  function AddCtrlFunction($log, AddService) {
    var vm = this;
    vm.genderOptions = AddService.genders();

    vm.update = function(){
      AddService.update(vm.formdata);
    }

  }
})();
