angular
  .module('myApp.heroesService.service', [])
  .factory('HeroesService', [
    '$resource',
    function($resource) {
      const self = this
      self.storedValue = [];

      return {
        setValue: () => $resource('https://randomuser.me/api/?results=5').get(null, heroes => {
            self.storedValue = heroes.results
          }),
        getValue: () => self.storedValue
      }

      // if(self.storedValue.length === 0) console.log('there is no value :(')

      // $resource('https://randomuser.me/api/?results=5').get(null, heroes => {
      //   this.storedValue = heroes.results
      // })

      // return self.storedValue
    } 
  ])