angular
  .module('myApp.opportunitiesService', [])
  .factory('OpportunitiesService', [
    '$resource', 'JwtService',
    class {
      #opportunities;

      constructor($resource, JwtService) {
        console.log(JwtService.getToken())
        this.#opportunities = $resource('http://localhost:3000/opportunities?_sort=createdAt&_order=desc')
          .query()
      }

      get() {
        return this.#opportunities.$promise
      }

      opportunitiesPromiseFactory() {
        return  {
          data: undefined , 
          hasFetchFailed: false, 
          isFetchLoading: true
        }
      }
    }
  ])