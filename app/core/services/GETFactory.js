export class GETFactory {
  #data;

  constructor($resource, endpoint, $location) {
    console.log($location)
    this.#data = $resource(endpoint).query();
  }
  
  GET() {
    return this.#data.$promise
  }

  GETLifeCycle() {
    return {
      data: undefined, 
      isFetchLoading: true
    }
  }
}
