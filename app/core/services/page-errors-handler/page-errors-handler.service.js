angular
  .module('myApp.core.services.pageErrorsHandlerService', [])
  .factory('PageErrorsHandlerService', [
    class {
      #error = null;
      
      clearPreviousErrors() {
        this.#error = null
        console.log(this.#error)
      }

      notifyError() {
        this.#error = true;
      }

      get hasErrors() {
        return this.#error !== null 
      }
    }
  ])