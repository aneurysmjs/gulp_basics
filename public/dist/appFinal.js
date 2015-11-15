(function() {
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

      $urlRouterProvider.when("", "/home");
      $urlRouterProvider.when("/", "/home");
      $urlRouterProvider.otherwise('/home');

      $stateProvider
         .state('home',{
            url: '/home',
            templateUrl: 'components/home/templates/home.html'
         });
   }

}());

(function () {
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
         templateUrl: 'components/home/templates/home.tpl.html'
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

(function () {
   'use strict';

   angular
      .module('frameworks')
      .config(config);
   console.log('--- frameworks config --- ');

   config.$inject = ['$stateProvider', '$urlRouterProvider'];

   function config($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.when("", "/home");
      $urlRouterProvider.when("/", "/home");
      $urlRouterProvider.otherwise('/home');

      $stateProvider
         .state('frameworks',{
            url: '/frameworks',
            templateUrl: 'components/frameworks/templates/frameworks.html'
         });

   }

}());

(function () {
   'use strict';
   console.log('--- frameworks directive --- ');

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
         templateUrl: 'components/frameworks/templates/frameworks.tpl.html'
      };

   }

   FrameworksController.$inject = ['frameworksFactory', '$scope'];

   function FrameworksController(frameworksFactory, $scope) {

      var self = this;
      self.framework = {};

      activate();

      function activate() {

         frameworksFactory.getFrameworks().then(function (response) {
            self.frameworks = response;
         });

         frameworksFactory.getBigJSON().then(function (response) {
            self.big = response;
         });

      }

      self.addFramework = addFramework;
      self.deleteFramework = deleteFramework;

      function addFramework() {
         frameworksFactory.addFramework(self.framework).then(function (response) {

            activate();
         });
      }

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

(function () {
   'use strict';
   
   angular.module('about', []);
   console.log('--- about module --- ');

}());

(function () {
   'use strict';

   angular
      .module('about')
      .config(config);
   console.log('--- about config --- ');

   config.$inject = ['$stateProvider', '$urlRouterProvider'];

   function config($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.when("", "/home");
      $urlRouterProvider.when("/", "/home");
      $urlRouterProvider.otherwise('/home');

      $stateProvider
         .state('about', {
            url: '/about',
            templateUrl: 'components/about/templates/about.html'
         });

   }

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
         scope:{},
         controller: AboutController,
         controllerAs: 'aboutCtrl',
         bindToController: true,
         templateUrl: 'components/about/templates/about.tpl.html'
      };

   }

   AboutController.$inject = [];

   function AboutController() {

   }

}());

(function () {
	'use strict';

	angular.module('about').run(run);

	run.$inject = ['$templateCache'];

	function run($templateCache) {
		console.log('about run');
		$templateCache.put('components/about/templates/about.html', '<about-directive></about-directive>');
	}

}());

(function () {
	'use strict';

	angular.module('about').run(run);

	run.$inject = ['$templateCache'];

	function run($templateCache) {
		console.log('about run');
		$templateCache.put('components/about/templates/about.tpl.html', '');
	}

}());

(function () {
	'use strict';

	angular.module('frameworks').run(run);

	run.$inject = ['$templateCache'];

	function run($templateCache) {
		console.log('frameworks run');
		$templateCache.put('components/frameworks/templates/frameworks.html', '<frameworks-directive></frameworks-directive>');
	}

}());

(function () {
	'use strict';

	angular.module('frameworks').run(run);

	run.$inject = ['$templateCache'];

	function run($templateCache) {
		console.log('frameworks run');
		$templateCache.put('components/frameworks/templates/frameworks.tpl.html', '<form name="frameworksForm" ng-submit="frameworksCtrl.addFramework()">\n   <div class="form-group">\n      <label for="name">Name</label>\n      <input type="text"\n             ng-model="frameworksCtrl.framework.name"\n             class="form-control"\n             id="name">\n   </div>\n   <div class="form-group">\n      <label for="company">Company</label>\n      <input type="text"\n             ng-model="frameworksCtrl.framework.company"\n             class="form-control"\n             id="company">\n   </div>\n   <button type="submit" class="btn btn-default">Submit</button>\n</form>\n\n<div class="table-responsive">\n   <table class="table table-condensed">\n      <thead>\n      <tr>\n         <th>id</th>\n         <th>Name</th>\n         <th>Company</th>\n         <th>&nbsp;</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr ng-repeat="framework in frameworksCtrl.frameworks">\n         <td>{{framework.id}}</td>\n         <td>{{framework.name}}</td>\n         <td>{{framework.company}}</td>\n         <td>\n            <span class="glyphicon glyphicon-remove"\n                  ng-click="frameworksCtrl.deleteFramework(framework)">\n            </span>\n         </td>\n      </tr>\n      </tbody>\n   </table>\n</div>\n\n<!--<pre>{{frameworksCtrl.big | json}}</pre>-->');
	}

}());

(function () {
	'use strict';

	angular.module('home').run(run);

	run.$inject = ['$templateCache'];

	function run($templateCache) {
		console.log('home run');
		$templateCache.put('components/home/templates/home.html', '<home-directive></home-directive>');
	}

}());

(function () {
	'use strict';

	angular.module('home').run(run);

	run.$inject = ['$templateCache'];

	function run($templateCache) {
		console.log('home run');
		$templateCache.put('components/home/templates/home.tpl.html', '<h1>Honey, I\'m home...</h1>');
	}

}());
//# sourceMappingURL=appFinal.js.map
