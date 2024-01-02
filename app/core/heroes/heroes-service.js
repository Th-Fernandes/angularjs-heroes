angular
  .module('myApp.heroesService.service', [])
  .factory('HeroesService', [
    '$resource',
    class HeroesService {
      heroes = [];
      lastHero = {}
  
      constructor($resource) {
        const HEROES_ENDPOINT = 'https://randomuser.me/api/?results=5';

        $resource(HEROES_ENDPOINT)
          .get(heroes => this.#storeHeroesOnState(heroes));
      }

      #storeHeroesOnState(heroes) {
        this.heroes.push(...heroes.results);
        const lastHero = heroes.results.at(-1);
        Object.assign(this.lastHero, lastHero);
      }

      addNewHero(hero) {
        this.heroes.push({...hero, login: { uuid: uuidv4() }});
        Object.assign(this.lastHero, hero);
      }

      findUserByUuid(uuid) {
        return this.heroes.find(hero => hero.login.uuid === uuid)
      }
    }
  ])