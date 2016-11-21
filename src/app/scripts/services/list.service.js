(function() {
  'use strict';

angular
   .module('dataphi')
   .service('ListService', ListServiceFunction);

 /** @ngInject */
 function ListServiceFunction($http, ProgressBarService) {
   var vm = this;
   ProgressBarService.setPreloaderConfig();
   ProgressBarService.load();

   vm.fetch = function(){
      return $http({
        method: 'GET',
        url: '/patients',
        cache: true
      });
   }
 }

 })();
