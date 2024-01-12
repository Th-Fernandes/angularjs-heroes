"use strict";

angular
  .module("myApp.opportunities", [])
  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
        .when("/opportunities", {
          template: '<h1> HELLO WORLD </h1>'
        })
    }
  ])


  
