angular
  .module('myApp.core.components.pageErrorsHandlerComponent', [])
  .component('pageErrorsHandler', {
    templateUrl: 'core/components/page-errors-handler/page-errors-handler.html', 
    transclude: true,
    controller: [
      'PageErrorsHandlerService', '$window',
      function( PageErrorsHandlerService, $window) { 
        this.errorHandler = PageErrorsHandlerService
        this.refreshPage = () => $window.location.reload()
      }
    ],
  })