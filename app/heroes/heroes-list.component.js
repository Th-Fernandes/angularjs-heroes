angular
  .module('myApp.heroes.listComponent', [])
  .component('heroesList', {
    templateUrl: 'heroes/heroes-list.html',
    controller: [
      'HeroesService',
      function (HeroesService, uuid) {
        this.heroes = HeroesService.storedValue
      }
    ]
  })