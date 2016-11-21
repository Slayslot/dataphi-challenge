(function() {
  'use strict';

angular
   .module('dataphi')
   .config(config);

 /** @ngInject */
 function config($logProvider, toastrConfig) {
   // Enable log
   $logProvider.debugEnabled(true);

   // Set options third-party lib
   toastrConfig.allowHtml = true;
   toastrConfig.timeOut = 3000;
   toastrConfig.positionClass = 'toast-bottom-left';
   toastrConfig.preventDuplicates = true;
   toastrConfig.closeButton = true;
   toastrConfig.progressBar = true;
   toastrConfig.debug = false;
   toastrConfig.preventDuplicates = false;
   toastrConfig.onclick = null;
   toastrConfig.showDuration = 500;
   toastrConfig.hideDuration = 600;
   toastrConfig.timeOut = 3000;
   toastrConfig.extendedTimeOut =500;
   toastrConfig.showEasing = "swing";
   toastrConfig.hideEasing = "linear";
   toastrConfig.showMethod = "fadeIn";
   toastrConfig.hideMethod = "fadeOut";
 }

 })();
