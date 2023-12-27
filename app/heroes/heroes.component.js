angular
  .module('myApp.heroes.listComponent', [])
  .component('heroesList', {
    templateUrl: 'heroes/heroes.html',
    controller: [
      'HeroesService',
      function (HeroesService) {
        this.heroes = HeroesService.result

        // HeroesService.add({
        //   name: {
        //     first: 'Thiago',
        //     last: 'Carvalho'
        //   }
        // })
      }
    ]
  })