angular
  .module('myApp.dashboard.lastCreatedHeroComponent', [])
  .component('lastCreatedHero', {
    templateUrl: 'features/dashboard/components/dashboard/dashboard.html',
    controller: [
      'HeroesService','PageErrorsHandlerService',
      class {
        constructor(HeroesService, PageErrorsHandlerService) {
          this.hero = HeroesService.heroesPromiseFactory();
          this.setHero = (newValue) => Object.assign(this.hero, newValue);
          
          HeroesService.heroes.$promise
            .then(heroes => this.setHero({data: heroes.at(-1)}))
            .catch(() => PageErrorsHandlerService.notifyError())
            .finally(() => this.setHero({ isFetchLoading: false }));
        }
      }
    ]
  })
