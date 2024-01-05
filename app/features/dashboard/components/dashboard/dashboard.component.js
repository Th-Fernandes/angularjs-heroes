angular
  .module('myApp.dashboard.lastCreatedHeroComponent', [])
  .component('lastCreatedHero', {
    templateUrl: 'features/dashboard/components/dashboard/dashboard.html',
    controller: [
      'HeroesService',
      class {
        constructor(HeroesService) {
          this.lastCreatedHero = HeroesService.lastHero;  
        }
      }
    ]
  })
