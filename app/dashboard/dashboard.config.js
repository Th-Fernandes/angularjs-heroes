"use strict";

angular
  .module("myApp.dashboard", ["ngRoute"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/dashboard", {
          templateUrl: "dashboard/dashboard.html",
          controller: "View1Ctrl",
        })
        .when("/dashboard/congrats", {
          template: '<p> congrats! you have find out our secret path'
        });
    },
  ])
  .controller("View1Ctrl", [function () {}]);
