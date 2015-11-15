(function () {
	'use strict';

	angular.module('frameworks').run(run);

	run.$inject = ['$templateCache'];

	function run($templateCache) {
		console.log('frameworks run');
		$templateCache.put('components/frameworks/templates/frameworks.tpl.html', '<form name="frameworksForm" ng-submit="frameworksCtrl.addFramework()">\n   <div class="form-group">\n      <label for="name">Name</label>\n      <input type="text"\n             ng-model="frameworksCtrl.framework.name"\n             class="form-control"\n             id="name">\n   </div>\n   <div class="form-group">\n      <label for="company">Company</label>\n      <input type="text"\n             ng-model="frameworksCtrl.framework.company"\n             class="form-control"\n             id="company">\n   </div>\n   <button type="submit" class="btn btn-default">Submit</button>\n</form>\n\n<div class="table-responsive">\n   <table class="table table-condensed">\n      <thead>\n      <tr>\n         <th>id</th>\n         <th>Name</th>\n         <th>Company</th>\n         <th>&nbsp;</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr ng-repeat="framework in frameworksCtrl.frameworks">\n         <td>{{framework.id}}</td>\n         <td>{{framework.name}}</td>\n         <td>{{framework.company}}</td>\n         <td>\n            <span class="glyphicon glyphicon-remove"\n                  ng-click="frameworksCtrl.deleteFramework(framework)">\n            </span>\n         </td>\n      </tr>\n      </tbody>\n   </table>\n</div>\n\n<!--<pre>{{frameworksCtrl.big | json}}</pre>-->');
	}

}());