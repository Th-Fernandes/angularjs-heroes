angular
  .module('myApp.opportunities.opportunitiesListComponent', [])
  .component('opportunitiesList', {
    templateUrl: 'features/opportunities/components/opportunities-list/opportunities-list.html',
    controller: [
      'OpportunitiesService',
      function(OpportunitiesService) {
        OpportunitiesService.get()
          .then(opportunities => this.opportunities = opportunities)
        
      }
    ]
  })