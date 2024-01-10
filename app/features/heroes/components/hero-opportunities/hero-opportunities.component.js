angular
  .module('myApp.heroes.heroOpportunitiesComponent', [])
  .component('heroOpportunities', {
    bindings: {
      opportunities: '<'
    },
    templateUrl: 'features/heroes/components/hero-opportunities/hero-opportunities.html',
    controller: [
      function() {}
    ]
  })