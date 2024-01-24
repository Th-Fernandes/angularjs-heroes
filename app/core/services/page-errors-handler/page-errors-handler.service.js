export class PageErrorsHandlerService {
  #error = null;

  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }
  
  get hasErrors() {
    return this.#error !== null;
  }
  
  notifyError() {
    this.#error = true;
  }

  clearPreviousErrorsOnRouteChanging() {
    this.$rootScope.$on("$routeChangeStart", () => (this.#error = null));
  }
}
