(function() {
  'use strict';

  angular
    .module('dataphi')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/add');

    $stateProvider
    .state('base-home', {
      abstract: true,
      url: '',
      templateUrl: 'app/main/base.home.html'
    })
    .state('add', {
      url: '/add',
      parent: 'base-home',
      templateUrl: 'app/views/add.html',
      controller: 'AddController',
      controllerAs: 'add'
    })
    .state('list', {
      url: '/list',
      parent: 'base-home',
      templateUrl: 'app/views/list.html',
      controller: 'ListController',
      controllerAs: 'list'
    })
  }

})();
