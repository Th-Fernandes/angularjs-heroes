angular
  .module('myApp.dashboard.lastCreatedHeroComponent', [])
  .component('lastCreatedHero', {
    templateUrl: 'features/dashboard/components/dashboard/dashboard.html',
    controller: [
      'HeroesService', '$window',
      class {
        constructor(HeroesService, $window) {
          this.hero = HeroesService.heroesPromiseFactory();
          this.setHero = (newValue) => Object.assign(this.hero, newValue);
          this.refreshPage = () => $window.location.reload();
          
          HeroesService.heroes.$promise
            .then(heroes => this.setHero({data: heroes.at(-1)}))
            .catch(() => this.setHero({ hasFetchFailed: true }))
            .finally(() => this.setHero({ isFetchLoading: false }));

        }
      }
    ]
  })
