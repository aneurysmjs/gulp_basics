(function() {
   'use strict';

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
         templateUrl: 'components/frameworks/frameworksTemplate.html'
      };

   }

   FrameworksController.$inject = ['frameworksFactory'];

   function FrameworksController(frameworksFactory) {

      var self = this;

      activate();

      function activate() {

         frameworksFactory.getFrameworks().then(function (response) {
            self.frameworks = response;
         });

         frameworksFactory.getBigJSON().then(function (response) {
            self.big = response;
         });

      }

      self.deleteFramework = deleteFramework;

      function deleteFramework(framework) {
         var index = self.frameworks.indexOf(framework);
         console.log('--- framework--- ');
         console.log(framework);
         console.log('--- index--- ');
         console.log(index);
         self.frameworks.splice(index, 1);
         
      }

   }


}());