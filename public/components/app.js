(function() {
   'use strict';

   angular
      .module('app', ['ui.router', 'home', 'frameworks'])
      .constant('API_URL', 'http:localhost:1989');

}());