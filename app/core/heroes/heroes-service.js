angular
  .module('myApp.heroesService.service', [])
  .factory('HeroesService', [
    '$resource',
    function($resource) {
      const self = this
      self.storedValue = [];

      $resource('https://randomuser.me/api/?results=5').get().$promise
        .then(heroes => {
          console.log(heroes.results[0].login.uuid)
          self.storedValue.push(...heroes.results)

          const x = self.storedValue.find(h => h.id.value === '')
        })

        function addNewHero(hero) {
          self.storedValue.push(hero)
        }

        function getLoginUuid(uuid) {
          return self.storedValue.find(hero => hero.login.uuid === uuid)
        }
      
      
      return {
        result: self.storedValue,
        add: addNewHero,
        getLoginUuid
      }      
    } 
  ])