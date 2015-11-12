(function () {	'use strict';
	angular.module('frameworks').run(run);
	run.$inject = ['$templateCache'];
	function run($templateCache) {
		console.log('frameworks run');
		$templateCache.put('components/frameworks/templates/frameworks.tpl.html', '<div class="table-responsive">\n   <table class="table table-condensed">\n      <thead>\n      <tr>\n         <th>id</th>\n         <th>Name</th>\n         <th>Company</th>\n         <th>&nbsp;</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr ng-repeat="framework in frameworksCtrl.frameworks">\n         <td>{{framework.id}}</td>\n         <td>{{framework.name}}</td>\n         <td>{{framework.company}}</td>\n         <td>\n            <span class="glyphicon glyphicon-remove"\n                  ng-click="frameworksCtrl.deleteFramework(framework)">\n            </span>\n         </td>\n      </tr>\n      </tbody>\n   </table>\n</div>\n\n<!--<pre>{{frameworksCtrl.big | json}}</pre>-->');
	}
}());