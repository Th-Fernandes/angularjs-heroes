angular
  .module('myApp.heroesService.service', [])
  .factory('HeroesService', [
    '$resource', 'API_ENDPOINTS',
    class HeroesService {
      #heroes;

      constructor($resource, API_ENDPOINTS) {
        this.#heroes = $resource(API_ENDPOINTS.HEROES).query();
      }

      GET() {
        return this.#heroes.$promise;
      }

      /* object handle FETCH heroes standardized */
      heroesPromiseFactory() {
        return {
          data: undefined, 
          isFetchLoading: true
        }
      }

      findByUuid(uuid) {
        return this.#heroes.$promise.then(heroes => {
          return heroes.find(hero => hero.id === uuid)
        })
      }
    }
  ])