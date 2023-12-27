"use strict";

angular
  .module("myApp.heroes", ["ngRoute" ,"myApp.heroes.listComponent"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/heroes", {
          template: '<heroes-list> </heroes-list>' 
        });
    },
  ]);
