(function() {
   'use strict';

   angular
      .module('home')
      .directive('homeDirective', homeDirective);

   homeDirective.$inject = [];

   function homeDirective() {

      return {
         scope: {},
         controller: HomeController,
         controllerAs: 'homeCtrl',
         bindToController: true,
         template: '<h1>Gulp</h1>'
      };

   }

   HomeController.$inject = [];

   function HomeController() {

   }

}());