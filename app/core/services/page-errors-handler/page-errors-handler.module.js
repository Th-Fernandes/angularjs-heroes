import { PageErrorsHandlerService } from "./page-errors-handler.service.js";

angular
  .module("myApp.core.services.pageErrorsHandlerService", [])
  .factory("PageErrorsHandlerService", PageErrorsHandlerService);
