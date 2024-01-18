export class GETFactory {
  #data;

  constructor($resource, endpoint) {
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

