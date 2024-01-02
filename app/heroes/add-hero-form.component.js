angular
  .module('myApp.heroes.addHeroFormComponent', [])
  .component('addHeroForm', {
    templateUrl: 'heroes/add-hero-form.html',
    controller: [
      'HeroesService',
      class AddHeroFormController {
        name = { first: '', last: ''};
        gender = "";
        email = '';
        cell = '';

        constructor(HeroesService) {
          this.HeroesService = HeroesService;
        }
        
        addNewHero() { 
          this.HeroesService.addNewHero({ 
            name: this.name, 
            gender: this.gender,
            email: this.email,
            cell: this.cell
          })
          this.clearInputs();
        }
    
    
        clearInputs() {
          this.name = { first: '', last: ''};
          this.gender = '';
          this.email = '';
          this.cell = '';
        }
      }
    ]
  })

  