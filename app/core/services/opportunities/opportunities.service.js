angular
  .module("myApp.opportunitiesService", [])
  .factory("OpportunitiesService", [
    "$resource",
    "$q",
    "JwtService",
    class {
      #opportunities;
      #SIGNED_IN_USER_ID;

      constructor($resource, $q, JwtService) {
        this.$q = $q;
        this.#SIGNED_IN_USER_ID = JwtService.getToken().value;
        this.#opportunities = $resource(
          "http://localhost:3000/opportunities?_sort=createdAt&_order=desc"
        ).query();
      }

      get() {
        return this.#opportunities.$promise;
      }

      getByCreatorId() {
        return this.#opportunities.$promise
          .then((opportunities) => {
            const signedInUserOpportunities = this.#filterByCreatorId(opportunities)
            return this.$q.resolve(signedInUserOpportunities);
          })
          .catch(() => $q.reject('API is not responding'));
      }

      #filterByCreatorId(opportunities) {
        return opportunities.filter(o => o.creatorID === this.#SIGNED_IN_USER_ID)
      }

      opportunitiesPromiseFactory() {
        return {
          data: undefined,
          isFetchLoading: true,
        };
      }
    },
  ]);
