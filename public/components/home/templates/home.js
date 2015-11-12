(function () {	'use strict';
	angular.module('home').run(run);
	run.$inject = ['$templateCache'];
	function run($templateCache) {
		console.log('home run');
		$templateCache.put('components/home/templates/home.html', '<home-directive></home-directive>');
	}
}());