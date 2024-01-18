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
    'myApp.opportunitiesService',
    'myApp.layout.header',
    'myApp.heroesService',
    'myApp.opportunities',
    'myApp.core.components',
    'myApp.core.services.pageErrorsHandlerService'
  ])
  .run([
    'AuthService', 'PageErrorsHandlerService',
    (AuthService, PageErrorsHandlerService) => {
      AuthService.redirectUnauthorizedUser()
      PageErrorsHandlerService.clearPreviousErrors()
    }
  ])
  .constant('API_ENDPOINTS', {
    HEROES: 'http://localhost:3000/heroes',
    OPPORTUNITIES: "http://localhost:3000/opportunities"
  })
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);

