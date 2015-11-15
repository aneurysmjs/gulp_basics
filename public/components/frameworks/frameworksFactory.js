(function () {
   'use strict';
   
   angular
      .module('frameworks')
      .factory('frameworksFactory', frameworksFactory);
   
   frameworksFactory.$inject = ['API_URL', '$http', '$q', '$cacheFactory'];
   
   function frameworksFactory(API_URL, $http, $q, $cacheFactory) {

      var jeroCache = $cacheFactory('jeroCache');
   
      return {
          getFrameworks: getFrameworks,
          getBigJSON: getBigJSON,
          addFramework: addFramework
      };
      
      function getFrameworks() {

         return $q(function (resolve, reject) {
            console.log('--- getFrameworks--- ');

            $http({
               url: API_URL + '/frameworks',
               method: 'GET'
            })
            .then(function (promise) {
               resolve(promise.data);
            }, function (reason) {
               reject(reason);
            });

         });

      }

      function getBigJSON() {

         return $q(function (resolve, reject) {

            $http({
               url: API_URL + '/assets/bigJSON',
               method: 'GET'
            })
            .then(function (promise) {
               resolve(promise.data);
            }, function (reason) {
               reject(reason);
            });

         });

      }

      function addFramework(framework) {

         return $q(function (resolve, reject) {

            $http({
               url: API_URL + '/framework',
               method: 'POST',
               data: {
                  "framework": framework
               }
            })
            .then(function (promise) {
                  console.log('--- promise--- ');
                  console.log(promise);
               resolve(promise.data);
            }, function (reason) {
               reject(reason);
            });

         });
      }
      
   }

}());