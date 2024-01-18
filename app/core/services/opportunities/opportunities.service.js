import { GETFactory } from "../GETFactory.js";


angular
  .module("myApp.opportunitiesService", [])
  .factory("OpportunitiesService", [
    "$resource",
    "$q",
    "JwtService",
    'API_ENDPOINTS',
    class OpportunitiesService extends GETFactory {
      #opportunities;
      #SIGNED_IN_USER_ID;

      constructor($resource, $q, JwtService, API_ENDPOINTS) {
        super($resource, API_ENDPOINTS.OPPORTUNITIES + "?_sort=createdAt&_order=desc");
        
        this.$q = $q;
        this.#SIGNED_IN_USER_ID = JwtService.getToken().value;
        this.$resource = $resource;

        this.#opportunities = this.GET();
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

      POST({ title, description }) {
        const opportunity = this.#StandardizeOpportunity({title,description});

        return this.$resource(API_ENDPOINTS.OPPORTUNITIES).save(opportunity)
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
