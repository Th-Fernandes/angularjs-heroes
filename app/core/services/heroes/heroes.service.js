import { GETFactory } from "../GETFactory.js"

angular
  .module('myApp.heroesService.service', [])
  .factory('HeroesService', [
    '$resource', 'API_ENDPOINTS',
    class HeroesService extends GETFactory {
      #heroes;

      constructor($resource, API_ENDPOINTS) {
        super($resource, API_ENDPOINTS.HEROES);
        this.#heroes = $resource(API_ENDPOINTS.HEROES).query();
      }

      findByUuid(uuid) {
        return this.#heroes.$promise.then(heroes => {
          return heroes.find(hero => hero.id === uuid)
        })
      }
    }
  ])