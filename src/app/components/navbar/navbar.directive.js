(function() {
  'use strict';

  angular
    .module('dataphi')
    .directive('mainNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'nav',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($rootScope, $scope, $state) {
      var vm = this;
      vm.menuOpen=false;
      if($state.current.name === 'add'){
        vm.active = 0;
      }else if($state.current.name === 'list'){
        vm.active = 1;
      }

      $rootScope.$on('$stateChangeSuccess',
      function(){
        vm.menuOpen=false;
      })

      $scope.$on('$viewContentLoaded', function(){
        if($state.current.name === 'add'){
          vm.active = 0;
        }else if($state.current.name === 'list'){
          vm.active = 1;
        }
      });
      vm.toggleMenu = function(){
        if(vm.menuOpen)
          vm.menuOpen=false;
        else
          vm.menuOpen=true;
      }
    }
  }

})();
