(function() {
   'use strict';
   console.log('--- about directive --- ');

   angular
      .module('about')
      .directive('aboutDirective', aboutDirective);
   
   aboutDirective.$inject = [];
   
   function aboutDirective() {

      return {
         scope:{},
         controller: AboutController,
         controllerAs: 'aboutCtrl',
         bindToController: true,
         templateUrl: 'components/about/about.tpl.html'
      };

   }

   AboutController.$inject = [];

   function AboutController() {

   }

}());