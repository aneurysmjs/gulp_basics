(function () {
   'use strict';

   angular
      .module('frameworks')
      .config(config);
   console.log('--- frameworks config --- ');

   config.$inject = ['$stateProvider', '$urlRouterProvider'];

   function config($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.when("", "/home");
      $urlRouterProvider.when("/", "/home");
      $urlRouterProvider.otherwise('/home');

      $stateProvider
         .state('frameworks',{
            url: '/frameworks',
            templateUrl: 'components/frameworks/templates/frameworks.html'
         });

   }

}());