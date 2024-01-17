angular
  .module('myApp.opportunities.publishOpportunityFormComponent', [])
  .component('publishOpportunityForm', {
    templateUrl: 'features/opportunities/components/publish-opportunity-form/publish-opportunity-form.html',
    controller: [
      function() {
        this.opportunity = { title: '', description: ''}
        this.onSubmitOpportunity = () => console.log(this.opportunity)
      }
    ]
  })