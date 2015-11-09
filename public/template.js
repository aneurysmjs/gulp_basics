(function () {
   'use strict';

   angular
      .module("app", ['ui.router', 'frameworks', 'about'])
      .constant('API_URL', 'http://localhost:1989');
      console.log('--- app module --- ');

}());

(function () {
   'use strict';

   angular.module("frameworks", []);
   console.log('--- frameworks module--- ');

}());

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
   angular.module("frameworks").run(function ($templateCache) {
      console.log('--- frameworks run --- ');
      $templateCache.put("components/frameworks/templates/frameworks.html", '<frameworks></frameworks>');
   });
}());


(function () {
   'use strict';
   angular.module("frameworks").run(function ($templateCache) {
      console.log('--- frameworks run tpl --- ');
      $templateCache.put("components/frameworks/templates/frameworks.tpl.html", '<div class="table-responsive">\n   <table class="table table-condensed">\n      <thead>\n      <tr>\n         <th>id</th>\n         <th>Name</th>\n         <th>Company</th>\n         <th>&nbsp;</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr ng-repeat="framework in frameworksCtrl.frameworks">\n         <td>{{framework.id}}</td>\n         <td>{{framework.name}}</td>\n         <td>{{framework.company}}</td>\n         <td>\n            <span class="glyphicon glyphicon-remove"\n                  ng-click="frameworksCtrl.deleteFramework(framework)">\n            </span>\n         </td>\n      </tr>\n      </tbody>\n   </table>\n</div>\n\n<!--<pre>{{frameworksCtrl.big | json}}</pre>-->');
   });
}());


(function () {
   'use strict';
   angular.module("frameworks").directive("frameworks", function () {
      return {
         restrict: "E",
         transclude: true,
         scope: {
            title: "@"
         },
         templateUrl: 'components/frameworks/templates/frameworks.tpl.html',
         link: function (scope) {
            scope.isContentVisible = false;

            scope.toggleContent = function () {
               scope.isContentVisible = !scope.isContentVisible;
            };
         },
         controller: FrameworksController,
         controllerAs: 'frameworksCtrl',
         bindToController: true
      };

   });


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
   angular.module("about", []);
}());

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
   angular.module("about").run(function ($templateCache) {
      console.log('--- about run --- ');
      $templateCache.put("components/about/templates/about.html", '<about></about>');
   });
}());


(function () {
   'use strict';
   angular.module("about").run(function ($templateCache) {
      console.log('--- about run tpl --- ');
      $templateCache.put("components/about/templates/about.tpl.html", '<h1>{{aboutCtrl.title}}</h1>');
   });
}());


(function () {
   'use strict';
   angular.module("about").directive("about", function () {

      return {
         restrict: "E",
         transclude: true,
         scope: {
            title: "@"
         },
         templateUrl: 'components/about/templates/about.tpl.html',
         link: function (scope) {
            scope.isContentVisible = false;

            scope.toggleContent = function () {
               scope.isContentVisible = !scope.isContentVisible;
            };
         },
         controller: AboutController,
         controllerAs: 'aboutCtrl',
         bindToController: true
      };

   });


   AboutController.$inject = [];

   function AboutController() {

      var self = this;

      self.title = 'I\'m a fucking about template';
   }

}());