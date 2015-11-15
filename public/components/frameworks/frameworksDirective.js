(function () {
   'use strict';
   console.log('--- frameworks directive --- ');

   angular
      .module('frameworks')
      .directive('frameworksDirective', frameworksDirective);

   frameworksDirective.$inject = [];

   function frameworksDirective() {

      return {
         scope: {},
         controller: FrameworksController,
         controllerAs: 'frameworksCtrl',
         bindToController: true,
         templateUrl: 'components/frameworks/templates/frameworks.tpl.html'
      };

   }

   FrameworksController.$inject = ['frameworksFactory', '$scope'];

   function FrameworksController(frameworksFactory, $scope) {

      var self = this;
      self.framework = {};

      activate();

      function activate() {

         frameworksFactory.getFrameworks().then(function (response) {
            self.frameworks = response;
         });

         frameworksFactory.getBigJSON().then(function (response) {
            self.big = response;
         });

      }

      self.addFramework = addFramework;
      self.deleteFramework = deleteFramework;

      function addFramework() {
         frameworksFactory.addFramework(self.framework).then(function (response) {

            activate();
         });
      }

      function deleteFramework(framework) {

         var index = self.frameworks.indexOf(framework);
         self.frameworks.splice(index, 1);

      }

   }

}());