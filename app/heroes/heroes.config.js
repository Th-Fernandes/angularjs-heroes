"use strict";

// import { v4 as uuidv4 } from 'uuid';

angular
  .module("myApp.heroes", [
    "ngRoute",
    "myApp.heroes.listComponent", 
    "myApp.heroes.addHeroFormComponent",
    "myApp.heroes.heroDetailsComponent",
  ])
  // .constant('uuid', uuidv4)
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
