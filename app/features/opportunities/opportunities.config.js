"use strict";

angular
  .module("myApp.opportunities", [
    'myApp.opportunities.opportunitiesListComponent',
    'myApp.opportunities.millisecondsToDate'
  ])
  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
        .when("/opportunities", {
          template: 
            '<page-errors-handler>'+
              '<opportunities-list></opportunities-list>'+
            '</page-errors-handler>',    
        })
    }
  ])


  
