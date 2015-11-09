//Routes
(function() {
   'use strict';

   angular
      .module('home')
      .config(config);
   console.log('--- home config --- ');

   config.$inject = ['$stateProvider', '$urlRouterProvider', '$templateCache'];

   function config($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.when("", "/home");
      $urlRouterProvider.when("/", "/home");
      $urlRouterProvider.otherwise('/home');

      $stateProvider
         .state('home',{
            url: '/home',
            templateUrl: 'components/home/home.html'
         });
   }

}());