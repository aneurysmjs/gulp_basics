(function() {
   'use strict';
   
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
         template: '<h1>About</h1>'
      };

   }

   AboutController.$inject = [];

   function AboutController() {

   }

}());