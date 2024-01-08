angular
  .module('myApp.heroesService.service', [])
  .factory('HeroesService', [
    '$resource', 'API_ENDPOINTS',
    class HeroesService {
      constructor($resource, API_ENDPOINTS) {
        this.heroes = $resource(API_ENDPOINTS.HEROES).query();
      }

      addNewHero(hero) {
        this.heroes.push({...hero, login: { uuid: uuidv4() }});
      }

      findByUuid(uuid) {
        return this.heroes.$promise.then(heroes => {
          return heroes.find(hero => hero.id === uuid)
        })
      }
    }
  ])