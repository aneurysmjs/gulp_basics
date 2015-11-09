(function() {
   'use strict';

   angular
      .module('app', ['ui.router', 'home', 'frameworks', 'about'])
      .constant('API_URL', 'http://localhost:1989');
   console.log('--- app module --- ');

}());