angular
  .module('myApp.heroes.listComponent', [])
  .component('heroesList', {
    templateUrl: 'heroes/heroes-list.html',
    controller: [
      'HeroesService',
      function (HeroesService) {
        this.heroes = HeroesService.heroes
      }
    ]
  })