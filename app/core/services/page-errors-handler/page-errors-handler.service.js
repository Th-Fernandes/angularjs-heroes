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

      setError(error) {
        this.#error = error;
      }

      get hasErrors() {
        return this.#error !== null 
      }
    }
  ])