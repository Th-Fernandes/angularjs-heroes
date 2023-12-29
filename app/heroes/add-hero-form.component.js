angular
  .module('myApp.heroes.addHeroFormComponent', [])
  .component('addHeroForm', {
    templateUrl: 'heroes/add-hero-form.html',
    controller: [
      'HeroesService',
      function(HeroesService) {
        this.name = { first: '', last: ''};
        this.gender = '';
        this.email = '';
        this.cell = '';''


        this.addNewHero = () => { 
          HeroesService.addNewHero({ 
            name: this.name, 
            gender: this.gender,
            email: this.email,
            cell: this.cell
          })
          this.clearInputs();
        }


        this.clearInputs = () => {
          this.name = { first: '', last: ''};
          this.gender = '';
          this.email = '';
          this.cell = '';
        }
      } 
    ]
  })