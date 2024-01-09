angular
  .module('myApp.heroes.listComponent', [])
  .component('heroesList', {
    templateUrl: 'features/heroes/components/heroes-list/heroes-list.html',
    controller: [
      'HeroesService',
      function (HeroesService) {
        this.heroes = { data: [], hasFetchFailed: false, isFetchLoading: true };
        this.setHeroes = (newValue) => Object.assign(this.heroes, newValue);
        
        HeroesService.heroes.$promise
          .catch(() => this.setHeroes({ data: [], hasFetchFailed: true }))
          .then(data => this.setHeroes({ data, hasFailedToGet: false }))
          .finally(() => this.heroes.isFetchLoading = false)
      }
    ]
  })