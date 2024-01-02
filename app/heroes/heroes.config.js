"use strict";

angular
  .module("myApp.heroes", [
    "ngRoute",
    "myApp.heroes.listComponent", 
    "myApp.heroes.addHeroFormComponent",
    "myApp.heroes.heroDetailsComponent",
  ])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/heroes", {
          template: 
            '<heroes-list> </heroes-list>'+
            '<add-hero-form> </add-hero-form>'
        })
        .when("/heroes/:uuid", {
            template: '<hero-details> </hero-details>'
        })
        ;
    },
  ]);
