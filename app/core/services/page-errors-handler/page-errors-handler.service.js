angular
  .module('myApp.core.services.pageErrorsHandlerService', [])
  .factory('PageErrorsHandlerService', [
    '$rootScope',
    class {
      #error = null;

      constructor($rootScope) {
        this.$rootScope = $rootScope;
      }
      
      clearPreviousErrorsOnRouteChanging() {
        this.$rootScope.$on("$routeChangeStart", () => this.#error = null )
      }

      notifyError() {
        this.#error = true;
      }

      get hasErrors() {
        return this.#error !== null 
      }
    }
  ])