angular
  .module('myApp.dashboard.lastCreatedHeroComponent', [])
  .component('lastCreatedHero', {
    templateUrl: 'features/dashboard/components/dashboard/dashboard.html',
    controller: [
      'HeroesService','PageErrorsHandlerService',
      class {
        constructor(HeroesService, PageErrorsHandlerService) {
          this.hero = HeroesService.heroesPromiseFactory();

          HeroesService.GET()
            .then(heroes => this.hero.data = heroes.at(-1))
            .catch(() => PageErrorsHandlerService.notifyError())
            .finally(() => this.hero.isFetchLoading = false);
        }
      }
    ]
  })
