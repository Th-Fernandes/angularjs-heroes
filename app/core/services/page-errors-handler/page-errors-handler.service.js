angular
  .module('myApp.core.services.pageErrorsHandlerService', [])
  .factory('PageErrorsHandlerService', [
    class {
      #error = null;

      constructor() {
        this.#clearPreviousErrors();
      }
      
      #clearPreviousErrors() {
        this.#error = null
      }

      notifyError() {
        this.#error = true;
      }

      get hasErrors() {
        return this.#error !== null 
      }
    }
  ])