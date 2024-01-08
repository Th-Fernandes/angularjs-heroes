angular
  .module('myApp.dashboard.lastCreatedHeroComponent', [])
  .component('lastCreatedHero', {
    templateUrl: 'features/dashboard/components/dashboard/dashboard.html',
    controller: [
      'HeroesService', '$window',
      class {
        constructor(HeroesService, $window) {
          this.refreshPage = () => $window.location.reload();
          
          HeroesService.heroes.$promise
            .then(heroes => this.lastCreatedHero = heroes.at(-1))
            .catch(() => this.hasHeroFetchFailed = true);
        }
      }
    ]
  })
