import { GETFactory } from "../GETFactory.js";

export class HeroesService extends GETFactory {
  #heroes;
  
  constructor($resource, API_ENDPOINTS) {
    super($resource, API_ENDPOINTS.HEROES);
    this.#heroes = this.GET();
  }
  
  findByUuid(uuid) {
    return this.#heroes.then((heroes) => {
      return heroes.find((hero) => hero.id === uuid);
    });
  }
}
