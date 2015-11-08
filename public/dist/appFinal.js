(function() {
   'use strict';

   angular
      .module('app', ['ui.router', 'home', 'frameworks', 'about'])
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
         })
         .state('about',{
            url: '/about',
            templateUrl: 'components/about/about.html'
         });

   }

}());

(function() {
   'use strict';
   
   angular
      .module('about')
      .directive('aboutDirective', aboutDirective);
   
   aboutDirective.$inject = [];
   
   function aboutDirective() {

      return {
         scope:{},
         controller: AboutController,
         controllerAs: 'aboutCtrl',
         bindToController: true,
         template: '<h1>About</h1>'
      };

   }

   AboutController.$inject = [];

   function AboutController() {

   }

}());

(function() {
   'use strict';
   
   angular.module('about', []);
   
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
         templateUrl: 'components/frameworks/frameworksTemplate.html'
      };

   }

   FrameworksController.$inject = ['frameworksFactory', '$scope'];

   function FrameworksController(frameworksFactory, $scope) {

      var self = this;

      activate();

      function activate() {

         frameworksFactory.getFrameworks().then(function (response) {
            self.frameworks = response;
         });

         frameworksFactory.getBigJSON().then(function (response) {
            self.big = response;
         });

      }

      self.deleteFramework = deleteFramework;

      function deleteFramework(framework) {
         var index = self.frameworks.indexOf(framework);
         self.frameworks.splice(index, 1);
         $scope.$on('destroy', function () {
            alert('destroyed??');
         });
      }

   }


}());

(function() {
   'use strict';
   
   angular
      .module('frameworks')
      .factory('frameworksFactory', frameworksFactory);
   
   frameworksFactory.$inject = ['API_URL', '$http', '$q', '$cacheFactory'];
   
   function frameworksFactory(API_URL, $http, $q, $cacheFactory) {

      var jeroCache = $cacheFactory('jeroCache');
   
      return {
          getFrameworks: getFrameworks,
          getBigJSON: getBigJSON
      };
      
      function getFrameworks() {

         return $q(function (resolve, reject) {

            $http({
               url: API_URL + '/frameworks',
               method: 'GET',
               cache: jeroCache
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