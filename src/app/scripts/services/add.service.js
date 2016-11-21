(function() {
  'use strict';

angular
   .module('dataphi')
   .service('AddService', AddServiceFunction);

 /** @ngInject */
 function AddServiceFunction($log) {
   var vm = this;

   vm.genders = function(){
     return [
          {value: 'Male'},
          {value: 'Female'},
          {value: 'Others'}
        ]
   }
   vm.update = function(data){
     $log.info('Hit the servers with',data);
   }

 }

 })();
