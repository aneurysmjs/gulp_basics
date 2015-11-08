(function() {
   'use strict';

   angular.module('home').factory('homeFactory', homeFactory);

   homeFactory.$inject = ['$http', '$q'];

   function homeFactory($http, $q) {

      return {
          getUsers: getUsers
      };

      function getUsers() {

         $q(function (resolve, reject) {

         });

      }

   }

}());