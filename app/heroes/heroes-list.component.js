angular
  .module('myApp.heroes.listComponent', [])
  .component('heroesList', {
    templateUrl: 'heroes/heroes-list.html',
    controller: [
      'HeroesService',
      function (HeroesService, uuid) {
        console.log(uuid)
        this.heroes = HeroesService.result 
      }
    ]
  })