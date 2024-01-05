angular
  .module('myApp.heroes.heroOpportunityComponent', [])
  .component('heroOpportunity', {
    bindings: {
      opportunities: '<'
    },
    templateUrl: 'features/heroes/components/hero-opportunity/hero-opportunity.html',
    controller: [
      function() {}
    ]
  })