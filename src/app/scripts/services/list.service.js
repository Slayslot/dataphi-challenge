(function() {
  'use strict';

angular
   .module('dataphi')
   .service('ListService', ListServiceFunction);

 /** @ngInject */
 function ListServiceFunction($http) {
   var vm = this;

   vm.fetch = function(){
      return $http({
        method: 'GET',
        url: '/patients',
        cache: true
      });
   }
 }

 })();
