angular.module('frameworks').run(['$templateCache', function($templateCache) {
console.log('frameworks run');
  $templateCache.put('/components/frameworks/frameworks.html',
    '<frameworks-directive></frameworks-directive>');
  }]);
