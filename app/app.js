'use strict';

const builtInLibraries = [
  'ngRoute',
  'ngMessages',
]
// Declare app level module which depends on views, and core components
angular
  .module('myApp', [
    ...builtInLibraries,
    'myApp.dashboard',
    'myApp.heroes',
    'myApp.auth',
    'myApp.signIn',
    'myApp.signUp',
    'myApp.layout.header',
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

