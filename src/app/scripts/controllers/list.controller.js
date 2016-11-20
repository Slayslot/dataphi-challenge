(function() {
  'use strict';

  angular
    .module('dataphi')
    .controller('ListController', ListCtrlFunction);

  /** @ngInject */
  function ListCtrlFunction($log, ListService) {
    $log.info('List Controller reporting in!');
    $log.info(ListService.fetch());
  }
})();
