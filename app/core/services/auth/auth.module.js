import { AuthService } from "./auth.service.js";
import { JWTService } from "./jwt.service.js";

angular
  .module("myApp.auth", [])
  .factory("AuthService", AuthService)
  .factory("JwtService", JWTService);