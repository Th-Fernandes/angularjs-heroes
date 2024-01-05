angular
  .module('myApp.heroesService.service', [])
  .factory('HeroesService', [
    '$resource',
    class HeroesService {
      heroes = [];
      lastHero = {}
  
      constructor($resource) {
        $resource('http://localhost:3000/heroes')
          .query(heroes => this.#storeHeroesOnState(heroes));
      }

      #storeHeroesOnState(heroes) {
        this.heroes.push(...heroes);
        const lastHero = heroes.at(-1);
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