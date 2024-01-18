angular
  .module('myApp.opportunities.opportunitiesListComponent', [])
  .component('opportunitiesList', {
    templateUrl: 'features/opportunities/components/opportunities-list/opportunities-list.html',
    controller: [
      'OpportunitiesService', 'PageErrorsHandlerService',
      function(OpportunitiesService, PageErrorsHandlerService) {
        this.opportunities = OpportunitiesService.GETLifeCycle()

        OpportunitiesService.GET()
          .then(opportunities => this.opportunities.data = opportunities)
          .catch(() => PageErrorsHandlerService.notifyError())
          .finally(() => this.opportunities.isFetchLoading = false)
        
      }
    ]
  })