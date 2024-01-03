'use strict';

// Declare app level module which depends on views, and core components
angular
  .module('myApp', [
    'ngRoute',
    'ngMessages',
    'myApp.dashboard',
    'myApp.heroes',
    'myApp.auth',
    'myApp.signIn',
    'myApp.heroesService',
    'myApp.version',
  ])
  .run([
    'AuthService',
    AuthService => AuthService.redirectUnauthorizedUser()
  ])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);

