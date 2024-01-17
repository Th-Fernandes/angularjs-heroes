"use strict";

angular
  .module("myApp.dashboard", [
    "ngRoute",
    'myApp.dashboard.lastCreatedHeroComponent',
    'myApp.dashboard.heroOpportunitiesComponent'
  ])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/dashboard", {
          template: 
          '<page-errors-handler>'+ 
            '<last-created-hero></last-created-hero>'+ 
            '<signed-in-hero-opportunities></signed-in-hero-opportunities>'+
          '</page-errors-handler>'
        })
    },
  ]);
