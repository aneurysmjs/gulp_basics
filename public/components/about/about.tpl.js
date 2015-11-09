angular.module('about').run(['$templateCache', function($templateCache) {
console.log('about run');
  $templateCache.put('/components/about/about.tpl.html',
    '');
  }]);
