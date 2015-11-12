(function () {	'use strict';
	angular.module('home').run(run);
	run.$inject = ['$templateCache'];
	function run($templateCache) {
		console.log('home run');
		$templateCache.put('components/home/templates/home.tpl.html', '<h1>Honey, I\'m home...</h1>');
	}
}());