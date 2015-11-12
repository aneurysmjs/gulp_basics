(function () {
   'use strict';

   angular
      .module('about')
      .config(config);
   console.log('--- about config --- ');

   config.$inject = ['$stateProvider', '$urlRouterProvider'];

   function config($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.when("", "/home");
      $urlRouterProvider.when("/", "/home");
      $urlRouterProvider.otherwise('/home');

      $stateProvider
         .state('about', {
            url: '/about',
            templateUrl: 'components/about/templates/about.html'
         });

   }

}());