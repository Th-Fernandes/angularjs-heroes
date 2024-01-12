"use strict";

angular
  .module("myApp.opportunities", [
    'myApp.opportunities.opportunitiesService',
    'myApp.opportunities.opportunitiesListComponent',
    'myApp.opportunities.millisecondsToDate'
  ])
  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
        .when("/opportunities", {
          template: '<opportunities-list></opportunities-list>',    
        })
    }
  ])


  
