angular
  .module('myApp.dashboard.lastCreatedHeroComponent', [])
  .component('lastCreatedHero', {
    templateUrl: 'dashboard/dashboard.html',
    controller: [
      'HeroesService',
      class {
        constructor(HeroesService) {
          this.lastCreatedHero = HeroesService.lastHero;  
        }
      }
    ]
  })
