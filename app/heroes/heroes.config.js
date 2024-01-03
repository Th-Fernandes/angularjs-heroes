"use strict";

angular
  .module("myApp.heroes", [
    "ngRoute",
    "myApp.heroes.listComponent", 
    "myApp.heroes.addHeroFormComponent",
    "myApp.heroes.heroDetailsComponent",
  ])
  /* PRIVATE ROUTES CONFIG */
  .run([
    '$rootScope', '$location', 'AuthService',
    function ($rootScope, $location, AuthService) {
      $rootScope.$on('$routeChangeStart', (event, next) => {
        if(next.$$route.private && !AuthService.isAuth()) 
          $location.path('/sign-in')
      })
    }
  ])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/heroes", {
          template: 
            '<heroes-list> </heroes-list>'+
            '<add-hero-form> </add-hero-form>',
          private: true
        })
        .when("/heroes/:uuid", {
          template: '<hero-details> </hero-details>',
        })
    },
  ]);
