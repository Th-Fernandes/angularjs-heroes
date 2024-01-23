import { HeroesService } from './heroes.service.js'

angular
  .module('myApp.heroesService', ['ngResource'])
  .factory("HeroesService", HeroesService);
  