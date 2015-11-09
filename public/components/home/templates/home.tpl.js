angular.module('home').run(['$templateCache', function($templateCache) {
console.log('home run');
  $templateCache.put('/components/home/home.tpl.html',
    '<h1>Honey, I\'m home...</h1>');
  }]);
