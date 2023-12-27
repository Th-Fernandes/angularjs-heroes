'use strict';

// Declare app level module which depends on views, and core components
angular
  .module('myApp', [
    'ngRoute',
    'myApp.dashboard',
    'myApp.heroes',
    'myApp.heroesService',
    'myApp.version',
  ])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
