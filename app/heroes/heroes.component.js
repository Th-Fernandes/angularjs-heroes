angular
  .module('myApp.heroes.listComponent', [])
  .component('heroesList', {
    templateUrl: 'heroes/heroes.html',
    controller: [
      'HeroesService',
      function (HeroesService) {
        if(HeroesService.getValue().length === 0)HeroesService.setValue();
        
        this.heroes = HeroesService.getValue()
        console.log()

        // .$promise.then((heroes) => {
        //   console.log(heroes)
        //   this.heroes = heroes.results
        // });
       
      }
    ]
  })