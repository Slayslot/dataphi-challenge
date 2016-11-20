(function() {
  'use strict';

angular
   .module('dataphi')
   .service('ListService', ListServiceFunction);

 /** @ngInject */
 function ListServiceFunction() {
   var vm = this;

   vm.fetch = function(){
     return 'List Service reporting in';
   }
 }

 })();
