(function() {
   'use strict';

   angular
      .module('app', ['ui.router', 'home', 'frameworks'])
      .constant('API_URL', 'http://localhost:1989');

}());
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
         });

   }

}());
(function() {
   'use strict';

   angular
      .module('frameworks')
      .directive('frameworksDirective', frameworksDirective);

   frameworksDirective.$inject = [];

   function frameworksDirective() {

      return {
         scope: {},
         controller: FrameworksController,
         controllerAs: 'frameworksCtrl',
         bindToController: true,
         template: '<h1>Frameworks</h1>'
      };

   }

   FrameworksController.$inject = ['frameworksFactory'];

   function FrameworksController(frameworksFactory) {

      var self = this;

      activate();

      function activate() {

         frameworksFactory.getFrameworks().then(function (response) {

            self.frameworks = response.data;

         });

      }

   }


}());
(function() {
   'use strict';
   
   angular
      .module('frameworks')
      .factory('frameworksFactory', frameworksFactory);
   
   frameworksFactory.$inject = ['API_URL', '$http', '$q'];
   
   function frameworksFactory(API_URL, $http, $q) {
   
      return {
          getFrameworks: getFrameworks
      };
      
      function getFrameworks() {

         return $q(function (resolve, reject) {

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
      
   }
   
  

}());
(function() {
   'use strict';

   angular.module('frameworks', []);

}());
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
         template: '<h1>Gulp</h1>'
      };

   }

   HomeController.$inject = [];

   function HomeController() {

   }

}());
(function() {
   'use strict';

   angular.module('home', []);

}());