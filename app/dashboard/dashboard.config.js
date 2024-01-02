"use strict";

angular
  .module("myApp.dashboard", [
    "ngRoute",
    'myApp.dashboard.lastCreatedHeroComponent'
  ])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/dashboard", {
          template: '<last-created-hero> </last-created-hero>'
        })
        .when("/dashboard/congrats", {
          template: '<p> congrats! you have find out our secret path'
        });
    },
  ]);
