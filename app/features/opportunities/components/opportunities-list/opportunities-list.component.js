angular
  .module('myApp.opportunities.opportunitiesListComponent', [])
  .component('opportunitiesList', {
    templateUrl: 'features/opportunities/components/opportunities-list/opportunities-list.html',
    controller: [
      'OpportunitiesService', 'PageErrorsHandlerService',
      function(OpportunitiesService, PageErrorsHandlerService) {
        this.opportunities = OpportunitiesService.opportunitiesPromiseFactory()

        OpportunitiesService.get()
          .then(opportunities => this.opportunities.data = opportunities)
          .catch(() => PageErrorsHandlerService.notifyError())
          .finally(() => this.opportunities.isFetchLoading = false)
        
      }
    ]
  })