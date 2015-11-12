(function () {
	'use strict';

	angular.module('about').run(run);

	run.$inject = ['$templateCache'];

	function run($templateCache) {
		console.log('about run');
		$templateCache.put('components/about/templates/about.html', '<about-directive></about-directive>');
	}

}());