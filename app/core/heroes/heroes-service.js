angular
  .module('myApp.heroesService.service', [])
  .factory('HeroesService', [
    '$resource',
    class HeroesService {
      storedValue = [];
      lastHero = {}
  
      constructor($resource) {
        const HEROES_ENDPOINT = 'https://randomuser.me/api/?results=5';

        $resource(HEROES_ENDPOINT)
          .get(heroes => this.#storeHeroesOnState(heroes));
      }

      #storeHeroesOnState(heroes) {
        this.storedValue.push(...heroes.results);
        const lastHero = heroes.results.at(-1);
        Object.assign(this.lastHero, lastHero);
      }

      addNewHero(hero) {
        this.storedValue.push({...hero, login: { uuid: uuidv4() }});
        Object.assign(this.lastHero, hero);
      }

      findUserByUuid(uuid) {
        return this.storedValue.find(hero => hero.login.uuid === uuid)
      }
    }
  ])