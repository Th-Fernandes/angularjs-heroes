angular
  .module('myApp.heroesService.service', [])
  .factory('HeroesService', [
    '$resource',
    class HeroesService {
      HEROES_ENDPOINT = 'https://randomuser.me/api/?results=5';
      storedValue = [];
      lastHero = {}
  
      constructor($resource) {
        this.$resource = $resource;

        $resource(this.HEROES_ENDPOINT).get().$promise
          .then(heroes => {
            this.storedValue.push(...heroes.results);
            const lastHero = heroes.results.at(-1);
            Object.assign(this.lastHero, lastHero);
          });

        this.storedHeroes = $resource(this.HEROES_ENDPOINT,
          null,
          {
            get: {
              method: 'GET',
              isArray: true,
              transformResponse: res => {
                res = JSON.parse(res);
                return res.results;
              }
            },
            getLast: {
              method: 'GET',
              transformResponse: (res) => {
                res = JSON.parse(res);
                return res.results.at(-1);
              }
            }
          })
      }

      addNewHero(hero) {
        this.storedValue.push({...hero, login: { uuid: uuidv4() }});
        Object.assign(this.lastHero, hero);
      }

      getLoginUuid(uuid) {
        return this.storedValue.find(hero => hero.login.uuid === uuid)
      }
    }
  ])