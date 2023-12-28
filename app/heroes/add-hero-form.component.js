angular
  .module('myApp.heroes.addHeroFormComponent', [])
  .component('addHeroForm', {
    templateUrl: 'heroes/add-hero-form.html',
    controller: [
      'HeroesService',
      function(HeroesService) {
        this.name = {
          first: '',
          last: ''
        }

        this.addNewHero = () => {
          HeroesService.add({ name: this.name })
          this.name = {}
        }
      } 
    ]
  })