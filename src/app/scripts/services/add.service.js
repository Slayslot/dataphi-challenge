(function() {
  'use strict';

angular
   .module('dataphi')
   .service('AddService', AddServiceFunction);

 /** @ngInject */
 function AddServiceFunction() {
   var vm = this;

   vm.fetch = function(){
     return 'Add Service reporting in';
   }
 }

 })();
