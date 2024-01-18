angular
  .module('myApp.dashboard.heroOpportunitiesComponent', [])
  .component('signedInHeroOpportunities', {
    templateUrl: 'features/dashboard/components/signed-in-hero-opportunities/signed-in-hero-opportunities.html',
    controller: [
      'OpportunitiesService', 'PageErrorsHandlerService',
      function(OpportunitiesService, PageErrorsHandlerService) {
        this.opportunities = OpportunitiesService.GETLifeCycle();

        OpportunitiesService.getByCreatorId()
          .then(res => this.opportunities.data = res)
          .catch(() => PageErrorsHandlerService.notifyError())
          .finally(() => this.opportunities.isFetchLoading = false)
       
      }
    ]
  })