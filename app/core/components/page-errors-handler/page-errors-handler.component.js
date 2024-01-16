angular
  .module('myApp.core.components.pageErrorsHandlerComponent', [])
  .component('pageErrorsHandler', {
    templateUrl: 'core/components/page-errors-handler/page-errors-handler.html', 
    transclude: true,
    controller: [
      function() { 
        this.errorHandler = {hasErrors: true}
      }
    ],
  })