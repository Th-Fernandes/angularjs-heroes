angular
  .module("myApp.opportunities.publishOpportunityFormComponent", [])
  .component("publishOpportunityForm", {
    templateUrl:
      "features/opportunities/components/publish-opportunity-form/publish-opportunity-form.html",
    controller: [
      "OpportunitiesService", "$location",
      function (OpportunitiesService, $location) {
        this.opportunity = { title: "", description: "" };
        this.opportunityPost = {isLoading: false, error: null};

        this.onSubmitOpportunity = () => {
          this.opportunityPost.isLoading = true;

          OpportunitiesService.POST(this.opportunity)
            .catch(() => this.opportunityPost.error = "API OFF")
            .then(() => !this.opportunityPost.error && $location.path('/opportunities'))
            .finally(() => this.opportunityPost.isLoading = false)
        }
      },
    ],
  });
