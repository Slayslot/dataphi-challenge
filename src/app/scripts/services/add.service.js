(function() {
  'use strict';

angular
   .module('dataphi')
   .service('AddService', AddServiceFunction);

 /** @ngInject */
 function AddServiceFunction($log, ProgressBarService, $state, toastr) {
   var vm = this;
   ProgressBarService.setPreloaderConfig();
   ProgressBarService.load();


   vm.genders = function(){
     return [
          {value: 'Male'},
          {value: 'Female'},
          {value: 'Others'}
        ]
   }
   vm.update = function(data){
     $log.info('Hit the servers with',data);
     $state.reload();
     ProgressBarService.stop();
     toastr.success('Patient Successfully added');
   }

 }

 })();
