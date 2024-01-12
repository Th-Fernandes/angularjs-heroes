angular
  .module('myApp.opportunities.opportunitiesService', [])
  .factory('OpportunitiesService', [
    '$resource',
    class {
      #opportunities;

      constructor($resource) {
        this.#opportunities = $resource('http://localhost:3000/opportunities?_sort=createdAt&_order=desc')
          .query()
      }

      get() {
        return this.#opportunities.$promise
      }
    }
  ])