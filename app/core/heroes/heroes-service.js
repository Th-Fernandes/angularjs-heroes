angular
  .module('myApp.heroesService.service', [])
  .factory('HeroesService', [
    '$resource',
    class HeroesService {
      heroesEndPoint = 'https://randomuser.me/api/?results=5';
      storedValue = [];
  
      constructor($resource) {
        console.log(uuidv4())
        $resource(this.heroesEndPoint).get().$promise
          .then(heroes => this.storedValue.push(...heroes.results));
      }
  
      addNewHero(hero) {
        this.storedValue.push({...hero, login: { uuid: uuidv4() }});
      }
  
      getLoginUuid(uuid) {
        return this.storedValue.find(hero => hero.login.uuid === uuid)
      }
    }
  ])