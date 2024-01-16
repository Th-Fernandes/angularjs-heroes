angular
  .module('myApp.core.components.pageErrorsHandlerComponent', [])
  .component('pageErrorsHandler', {
    templateUrl: 'core/components/page-errors-handler/page-errors-handler.html', 
    transclude: true,
    controller: [
      'PageErrorsHandlerService',
      function( PageErrorsHandlerService) { 
        this.errorHandler = PageErrorsHandlerService
      }
    ],
  })