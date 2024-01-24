export class AuthService {
  constructor(
    $rootScope, $location, $q, JwtService, $resource, API_ENDPOINTS
  ){
      this.$location = $location;
      this.JwtService = JwtService;
      this.$rootScope = $rootScope;
      this.$q = $q;
      this.$resource = $resource;
      this.API_ENDPOINTS = API_ENDPOINTS;
    }

  redirectUnauthorizedUser() {
    this.$rootScope.$on("$routeChangeStart", (event, next) => {
      this.JwtService.onRouteChanging();
      const { isUnavailable } = this.JwtService.getToken();

      if (next.$$route?.private && isUnavailable)
        this.$location.path("/sign-in");
    });
  }

  signIn({ email, password }) {
    const queryUrl = this.API_ENDPOINTS.HEROES + `?email=${email}&password=${password}`;

    return this.$resource(queryUrl).query().$promise
      .catch(() => this.$q.reject("API OFF"))
      .then((res) => {
        if (!res[0]) return this.$q.reject("user not found");
        return res;
      })
      .then((res) => {
        const signedInUserId = res[0].id;
        this.JwtService.storeOnClient(signedInUserId);
        return this.$q.resolve(true);
      });
    }

  signPromiseFactory() {
    return { isLoading: false, errorMessage: null };
  }

  signUp(heroData) {
    // TODO: REFACTOR THIS SECTION INTO A NEW METHOD
    const heroDataChecking = this.$q.defer();
    const standardizedHero = new HeroModel(heroData).set();
    if (standardizedHero.hasError){
      heroDataChecking.reject(standardizedHero.errorMessage);
      return heroDataChecking.promise;
    }
    /* ===================== */
    return this.$resource(this.API_ENDPOINTS.HEROES).save(standardizedHero).$promise
      .catch(() => this.$q.reject("API OFF"))
      .then(() => this.$q.resolve(true));
    }

  signOut() {
    this.JwtService.removeToken();
    this.$location.path("/sign-in");
  }
}

  class HeroModel {
    immutableFields = {
      id: uuidv4(),
    }
    mutableFields = {
      name: {
        first: "",
        last: ""
      },
      photo: "",
      gender: "",
      codename: "",
      phoneNumber: "",
      email: "",
      password: "",
    }

    errorMessage = ''

    constructor(heroData) {
      this.heroData = heroData
    }

    set() {
      const checkers = [this.checkMissingFields()]

      if(checkers.includes(true)) return this.getCheckFailObj()
      return {...this.immutableFields, ...this.heroData }
    }
    
    checkMissingFields() {
      for(let heroModelProperty of Object.keys(this.mutableFields)) {
        const isFieldMissing = !this.heroData.hasOwnProperty(heroModelProperty)
        if(isFieldMissing) {
          this.errorMessage = `EXTERNAL ERROR: hero data received from sign up param method does not have "${heroModelProperty}" field`
          return isFieldMissing
        }
      }
    }

    getCheckFailObj() {
      return {
        hasError: true,
        errorMessage: this.errorMessage
      }
    }
  }