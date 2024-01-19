import { GETFactory } from "../GETFactory.js";


angular
  .module("myApp.opportunitiesService", [])
  .factory("OpportunitiesService", [
    "$resource",
    "$q",
    "JwtService",
    'API_ENDPOINTS',
    function($resource, $q, JwtService, API_ENDPOINTS) {
      const SIGNED_IN_USER_ID = JwtService.getToken().value

      class OpportunitiesService extends GETFactory {
        #opportunities;
  
        constructor() {
          super($resource, API_ENDPOINTS.OPPORTUNITIES + "?_sort=createdAt&_order=desc");
          this.#opportunities = this.GET();
        }
  
        getByCreatorId() {
          return this.#opportunities
            .then((opportunities) => {
              const signedInUserOpportunities = this.#filterByCreatorId(opportunities);
              return $q.resolve(signedInUserOpportunities);
            })
            .catch(() => $q.reject("API is not responding"));
        }
  
        #filterByCreatorId(opportunities) {
          return opportunities.filter((o) => o.creatorID === SIGNED_IN_USER_ID);
        }
  
        POST({ title, description }) {
          const opportunity = new Opportunity({title, description});
          
          return $resource(API_ENDPOINTS.OPPORTUNITIES).save(opportunity)
            .$promise.then(() => this.#opportunities.then(o => o.unshift(opportunity)));
        }
      }

      class Opportunity {
        constructor({title, description}) {
            this.id = uuidv4(),
            this.createdAt = new Date().getTime(),
            this.creatorID = SIGNED_IN_USER_ID,
            this.title = title,
            this.description = description,
            this.volunteers = []
          }
      }

      return new OpportunitiesService()
    },
  ]);
