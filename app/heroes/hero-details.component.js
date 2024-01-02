angular
  .module('myApp.heroes.heroDetailsComponent', [])
  .component('heroDetails', {
    templateUrl: 'heroes/hero-details.html',
    controller: [
      '$routeParams', 'HeroesService',
      function($routeParams, HeroesService) {
        this.hero = HeroesService.getLoginUuid($routeParams.uuid)
      }
    ]
  })