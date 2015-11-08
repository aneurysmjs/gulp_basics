//Routes
(function() {
   'use strict';

   angular
      .module('app')
      .config(config);

   config.$inject = ['$stateProvider', '$urlRouterProvider'];

   function config($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.when("", "/home");
      $urlRouterProvider.when("/", "/home");
      $urlRouterProvider.otherwise('/home');

      $stateProvider
         .state('home',{
            url: '/home',
            templateUrl: 'components/home/home.html'
         })
         .state('frameworks',{
            url: '/frameworks',
            templateUrl: 'components/frameworks/frameworks.html'
         })
         .state('about',{
            url: '/about',
            templateUrl: 'components/about/about.html'
         });

   }

}());