angular
  .module('myApp.heroesService.service', [])
  .factory('HeroesService', [
    '$resource',
    function($resource) {
      const self = this
      self.storedValue = [];

      $resource('https://randomuser.me/api/?results=5').get().$promise
        .then(heroes => self.storedValue.push(...heroes.results))

        function addNewHero(hero) {
          self.storedValue.push(hero)
        }
      
      
      return {
        result: self.storedValue,
        add: addNewHero
      }      
    } 
  ])