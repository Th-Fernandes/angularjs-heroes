angular
  .module('myApp.heroes.heroDetailsComponent', [])
  .component('heroDetails', {
    templateUrl: 'features/heroes/components/hero-details/hero-details.html',
    controller: [
      '$routeParams', 'HeroesService', 
      function($routeParams, HeroesService) {
        this.hero = HeroesService.heroesPromiseFactory();
        this.setHero = (newValue) => Object.assign(this.hero, newValue)

        HeroesService.findByUuid($routeParams.uuid)
          .catch(() => this.setHero({hasFetchFailed: true}))
          .then(user => this.setHero({ data: user }))
          .finally(() => this.setHero({ isFetchLoading: false }))
      }
    ]
  })