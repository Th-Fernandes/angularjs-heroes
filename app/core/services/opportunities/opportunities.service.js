angular
  .module("myApp.opportunitiesService", [])
  .factory("OpportunitiesService", [
    "$resource",
    "$q",
    "JwtService",
    'API_ENDPOINTS',
    class {
      #opportunities;
      #SIGNED_IN_USER_ID;

      constructor($resource, $q, JwtService, API_ENDPOINTS) {
        this.$q = $q;
        this.#SIGNED_IN_USER_ID = JwtService.getToken().value;
        this.$resource = $resource;
        this.API_ENDPOINTS = API_ENDPOINTS

        this.#opportunities = $resource(
          API_ENDPOINTS.OPPORTUNITIES + "?_sort=createdAt&_order=desc"
        ).query();
      }

      GET() {
        return this.#opportunities.$promise;
      }

      getByCreatorId() {
        return this.#opportunities.$promise
          .then((opportunities) => {
            const signedInUserOpportunities = this.#filterByCreatorId(opportunities);
            return this.$q.resolve(signedInUserOpportunities);
          })
          .catch(() => $q.reject("API is not responding"));
      }

      #filterByCreatorId(opportunities) {
        return opportunities.filter((o) => o.creatorID === this.#SIGNED_IN_USER_ID);
      }

      GETLifeCycle() {
        return {
          data: undefined,
          isFetchLoading: true,
        };
      }

      POST({ title, description }) {
        const opportunity = this.#StandardizeOpportunity({title,description});

        return this.$resource(API_ENDPOINTS.OPPORTUNITIES)
          .save(opportunity)
          .$promise.then(() => this.#opportunities.unshift(opportunity));
      }

      #StandardizeOpportunity({ title, description }) {
        return {
          id: uuidv4(),
          createdAt: new Date().getTime(),
          creatorID: this.#SIGNED_IN_USER_ID,
          title,
          description,
          volunteers: [],
        };
      }
    },
  ]);
