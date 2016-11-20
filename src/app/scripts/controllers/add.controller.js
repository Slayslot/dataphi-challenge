(function() {
  'use strict';

  angular
    .module('dataphi')
    .controller('AddController', AddCtrlFunction);

  /** @ngInject */
  function AddCtrlFunction($log, AddService) {
    $log.info('Add Controller reporting in!');
    $log.info(AddService.fetch());
  }
})();
