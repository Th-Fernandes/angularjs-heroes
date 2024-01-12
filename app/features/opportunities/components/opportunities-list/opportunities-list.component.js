angular
  .module('myApp.opportunities.opportunitiesListComponent', [])
  .component('opportunitiesList', {
    templateUrl: 'features/opportunities/components/opportunities-list/opportunities-list.html',
    controller: [
      'OpportunitiesService',
      function(OpportunitiesService) {
        this.opportunities = OpportunitiesService.opportunitiesPromiseFactory()

        OpportunitiesService.get()
          .then(opportunities => this.opportunities.data = opportunities)
          .catch(() => this.opportunities.hasFetchFailed = true)
          .finally(() => this.opportunities.isFetchLoading = false)
        
      }
    ]
  })