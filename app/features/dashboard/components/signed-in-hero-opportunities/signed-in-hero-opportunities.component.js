angular
  .module('myApp.dashboard.heroOpportunitiesComponent', [])
  .component('signedInHeroOpportunities', {
    templateUrl: 'features/dashboard/components/signed-in-hero-opportunities/signed-in-hero-opportunities.html',
    controller: [
      'OpportunitiesService',
      function(OpportunitiesService) {
        this.opportunities = OpportunitiesService.opportunitiesPromiseFactory();
        
        OpportunitiesService.getByCreatorId()
          .then(res => this.opportunities.data = res)
          .catch(() => this.opportunities.hasFetchFailed = true)
          .finally(() => this.opportunities.isFetchLoading = false)
      }
    ]
  })