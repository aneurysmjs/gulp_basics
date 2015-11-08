var module = angular.module('public/components/frameworks/frameworksTemplate.html', []);
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('public/components/frameworks/frameworksTemplate.html',
    '<div class="table-responsive">\n' +
    '   <table class="table table-condensed">\n' +
    '      <thead>\n' +
    '      <tr>\n' +
    '         <th>id</th>\n' +
    '         <th>Name</th>\n' +
    '         <th>Company</th>\n' +
    '      </tr>\n' +
    '      </thead>\n' +
    '      <tbody>\n' +
    '      <tr ng-repeat="framework in frameworksCtrl.frameworks">\n' +
    '         <td>{{framework.id}}</td>\n' +
    '         <td>{{framework.name}}</td>\n' +
    '         <td>{{framework.company}}</td>\n' +
    '      </tr>\n' +
    '      </tbody>\n' +
    '   </table>\n' +
    '</div>');
}]);

