(function () {	'use strict';
	angular.module('frameworks').run(run);
	run.$inject = ['$templateCache'];
	function run($templateCache) {
		console.log('frameworks run');
		$templateCache.put('components/frameworks/templates/frameworks.html', '<frameworks-directive></frameworks-directive>');
	}
}());