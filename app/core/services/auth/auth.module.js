import { AuthService } from "./auth.service.js";

angular
  .module("myApp.auth", ["myApp.auth.jwtService"])
  .factory("AuthService", AuthService);