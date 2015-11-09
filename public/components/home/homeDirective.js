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
         templateUrl: 'components/home/home.tpl.html'
      };

   }

   HomeController.$inject = ['homeFactory'];

   function HomeController(homeFactory) {

      var self = this;

      activate();

      function activate() {

      }

   }

}());