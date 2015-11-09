(function () {
   'use strict';

   angular
      .module('app', ['ui.router', 'home', 'frameworks', 'about'])
      .constant('API_URL', 'http://localhost:1989');
      console.log('--- app module --- ');

}());

(function () {
   'use strict';

   angular.module('home', []);
   console.log('--- home module--- ');

}());

(function () {
   'use strict';

   angular
      .module('home')
      .config(config);
   console.log('--- home config --- ');

   config.$inject = ['$stateProvider', '$urlRouterProvider'];

   function config($stateProvider, $urlRouterProvider) {

      $stateProvider
         .state('home',{
            url: '/home',
            templateUrl: 'components/home/templates/home.html'
         });

   }

}());

(function () {
   'use strict';
   angular.module('home').run(['$templateCache', function ($templateCache) {
      console.log('home run');
      $templateCache.put('/components/home/templates/home.html', '<home-directive></home-directive>');
   }]);
}());


(function () {
   'use strict';
   angular.module('home').run(['$templateCache', function ($templateCache) {
      console.log('home run tpl');
      $templateCache.put('/components/home/templates/home.tpl.html', '<h1>Honey, I\'m home...</h1>');
   }]);
}());


(function () {
   'use strict';

   angular
      .module('home')
      .directive('homeDirective', homeDirective);

   homeDirective.$inject = [];

   function homeDirective() {

      return {
         restrict: "E",
         transclude: true,
         scope: {},
         templateUrl: 'components/home/templates/home.tpl.html',
         controller: HomeController,
         controllerAs: 'homeCtrl',
         bindToController: true
      };

   }

   HomeController.$inject = ['homeFactory'];

   function HomeController(homeFactory) {

      var self = this;

      activate();

      function activate() {

      }

   }

}());

(function () {
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

(function () {
   'use strict';

   angular.module('frameworks', []);
   console.log('--- frameworks module --- ');

}());

//Routes
(function () {
   'use strict';

   angular
      .module('frameworks')
      .config(config);
   console.log('--- frameworks config --- ');

   config.$inject = ['$stateProvider', '$urlRouterProvider'];

   function config($stateProvider, $urlRouterProvider) {

      $stateProvider
         .state('frameworks',{
            url: '/frameworks',
            templateUrl: 'components/frameworks/templates/frameworks.html'
         });

   }

}());


(function () {
   'use strict';
   angular.module('frameworks').run(['$templateCache', function ($templateCache) {
      console.log('frameworks run');
      $templateCache.put('/components/frameworks/templates/frameworks.html', '<frameworks-directive></frameworks-directive>');
   }]);
}());

(function () {
   'use strict';
   angular.module('frameworks').run(['$templateCache', function ($templateCache) {
      console.log('frameworks run tpl');
      $templateCache.put('/components/frameworks/templates/frameworks.tpl.html', '<div class="table-responsive">\n   <table class="table table-condensed">\n      <thead>\n      <tr>\n         <th>id</th>\n         <th>Name</th>\n         <th>Company</th>\n         <th>&nbsp;</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr ng-repeat="framework in frameworksCtrl.frameworks">\n         <td>{{framework.id}}</td>\n         <td>{{framework.name}}</td>\n         <td>{{framework.company}}</td>\n         <td>\n            <span class="glyphicon glyphicon-remove"\n                  ng-click="frameworksCtrl.deleteFramework(framework)">\n            </span>\n         </td>\n      </tr>\n      </tbody>\n   </table>\n</div>\n\n');
   }]);
}());


(function () {
   'use strict';

   angular
      .module('frameworks')
      .directive('frameworksDirective', frameworksDirective);

   console.log('--- frameworks directive --- ');

   frameworksDirective.$inject = [];

   function frameworksDirective() {

      return {
         restrict: "E",
         transclude: true,
         scope: {},
         templateUrl: 'components/frameworks/templates/frameworks.tpl.html',
         controller: FrameworksController,
         controllerAs: 'frameworksCtrl',
         bindToController: true
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

      }

   }

}());

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

(function () {
   'use strict';

   angular.module('about', []);
   console.log('--- about module --- ');

}());

//Routes
(function () {
   'use strict';

   angular
      .module('about')
      .config(config);
   console.log('--- about config --- ');

   config.$inject = ['$stateProvider', '$urlRouterProvider'];

   function config($stateProvider, $urlRouterProvider) {


      $stateProvider
         .state('about',{
            url: '/about',
            templateUrl: 'components/about/templates/about.html'
         });

   }

}());


(function () {
   'use strict';
   angular.module('about').run(['$templateCache', function ($templateCache) {
      console.log('about run');
      $templateCache.put('/components/about/templates/about.html', '<about-directive></about-directive>');
   }]);
}());

(function () {
   'use strict';

   angular.module('about').run(['$templateCache', function ($templateCache) {
      console.log('about run');
      $templateCache.put('/components/about/templates/about.tpl.html', '<h1>{{aboutCtrl.title}}</h1>');
   }]);
}());


(function () {
   'use strict';
   console.log('--- about directive --- ');

   angular
      .module('about')
      .directive('aboutDirective', aboutDirective);

   aboutDirective.$inject = [];

   function aboutDirective() {

      return {
         restrict: "E",
         transclude: true,
         scope:{},
         templateUrl: 'components/about/templates/about.tpl.html',
         controller: AboutController,
         controllerAs: 'aboutCtrl',
         bindToController: true
      };

   }

   AboutController.$inject = [];

   function AboutController() {

      var self = this;

      self.title = 'I\'m a fucking about template';
   }

}());