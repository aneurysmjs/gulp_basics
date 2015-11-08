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
         template: '<h1>Gulp is so cool!!!</h1>'
      };

   }

   HomeController.$inject = ['homeFactory'];

   function HomeController(homeFactory) {

   }

}());