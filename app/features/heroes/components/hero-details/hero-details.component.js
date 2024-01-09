angular
  .module('myApp.heroes.heroDetailsComponent', [])
  .component('heroDetails', {
    templateUrl: 'features/heroes/components/hero-details/hero-details.html',
    controller: [
      '$routeParams', 'HeroesService', 
      function($routeParams, HeroesService) {
        this.hero = {}

        HeroesService.findByUuid($routeParams.uuid)
          .then(user => this.hero = user)
          .catch(() => this.hero = false)
      }
    ]
  })