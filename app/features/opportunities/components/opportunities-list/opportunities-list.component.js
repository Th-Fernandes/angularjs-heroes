angular
  .module('myApp.opportunities.opportunitiesListComponent', [])
  .component('opportunitiesList', {
    templateUrl: 'features/opportunities/components/opportunities-list/opportunities-list.html',
    controller: [
      'OpportunitiesService', 'PageErrorsHandlerService', 'JwtService',
      function(OpportunitiesService, PageErrorsHandlerService, JwtService) {
        this.opportunities = OpportunitiesService.GETLifeCycle();

        OpportunitiesService.GET()
          .then(opportunities => this.opportunities.data = opportunities)
          .catch(() => PageErrorsHandlerService.notifyError())
          .finally(() => (this.opportunities.isFetchLoading = false));

        this.addVolunteerOn = (opportunity) => {
          const signedInUserId = JwtService.getToken().value;
          const modifiedVolunteers = [...opportunity.volunteers, signedInUserId];
              
          OpportunitiesService.PATCH(opportunity.id, modifiedVolunteers)
            .then(() => opportunity.volunteers = modifiedVolunteers) 
        };

        this.toggleButton = (volunteers) => {
         return volunteers.find(e => e === JwtService.getToken().value);
        }
      }
    ]
  })