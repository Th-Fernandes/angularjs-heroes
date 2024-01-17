"use strict";

angular
  .module("myApp.opportunities", [
    'myApp.opportunities.opportunitiesListComponent',
    'myApp.opportunities.publishOpportunityRedirectorComponent',
    'myApp.opportunities.millisecondsToDate'
  ])
  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
        .when("/opportunities", {
          template: 
            '<page-errors-handler>'+
              '<publish-opportunity-redirector> </publish-opportunity-redirector>'+
              '<opportunities-list></opportunities-list>'+
            '</page-errors-handler>',
          })
        .when("/opportunities/publish", {
          template: 'hi'
        })    
    }
  ])


  
