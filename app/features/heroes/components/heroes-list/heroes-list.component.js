angular
  .module('myApp.heroes.listComponent', [])
  .component('heroesList', {
    templateUrl: 'features/heroes/components/heroes-list/heroes-list.html',
    controller: [
      'HeroesService',
      function (HeroesService) {
        this.heroes = HeroesService.heroes
      }
    ]
  })