angular.module('home').run(['$templateCache', function($templateCache) {
console.log('home run');
  $templateCache.put('/components/home/home.html',
    '<home-directive></home-directive>');
  }]);
