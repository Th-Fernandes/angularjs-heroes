angular
  .module('myApp.heroes.listComponent', [])
  .component('heroesList', {
    templateUrl: 'features/heroes/components/heroes-list/heroes-list.html',
    controller: [
      'HeroesService','PageErrorsHandlerService',
      function (HeroesService, PageErrorsHandlerService) {
        this.heroes = HeroesService.heroesPromiseFactory();
        
        HeroesService.heroes.$promise
          .catch(() => PageErrorsHandlerService.notifyError())
          .then(heroes => this.heroes.data = heroes)
          .finally(() => this.heroes.isFetchLoading = false)
      }
    ]
  })