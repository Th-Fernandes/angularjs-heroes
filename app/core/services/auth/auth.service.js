angular
  .module('myApp.auth.authService', [])
  .factory('AuthService', [
    '$rootScope', '$location', '$q', 'JwtService', '$resource', 'API_ENDPOINTS',
    function($rootScope, $location, $q , JwtService, $resource, API_ENDPOINTS,) {
      function redirectUnauthorizedUser() {    
        $rootScope.$on('$routeChangeStart', (event, next) => {
          JwtService.onRouteChanging();
          const { isUnavailable } = JwtService.getToken();

          if(next.$$route?.private && isUnavailable) $location.path('/sign-in');
        })
      }

      function signIn({ email, password }) {
        const queryUrl = API_ENDPOINTS.HEROES + `?email=${email}&password=${password}`  

        return $resource(queryUrl).query().$promise
          .catch(() => $q.reject('API OFF'))
          .then(res => {
            if(!res[0]) return $q.reject('user not found')
            return res
          })
          .then((res) => {
            const signedInUserId = res[0].id
            JwtService.storeOnClient(signedInUserId)
            return $q.resolve(true)
          })
      }

      function signPromiseFactory() {
        return {
          isLoading: false,
          errorMessage: null
        }
      }

      function signUp(heroData) {
        // TODO: REFACTOR THIS SECTION INTO A NEW METHOD
        const heroDataChecking = $q.defer()
        const standardizedHero = new HeroModel(heroData).set()
        if(standardizedHero.hasError) {
          heroDataChecking.reject(standardizedHero.errorMessage)
          return heroDataChecking.promise
        }
        /* ===================== */
        
        return $resource(API_ENDPOINTS.HEROES).save(standardizedHero).$promise
          .catch(() => $q.reject('API OFF'))
          .then(() => $q.resolve(true))
      }

      function signOut() {
        JwtService.removeToken();
        $location.path('/sign-in');
      }

      return{ 
        redirectUnauthorizedUser,
        signIn,
        signPromiseFactory,
        signUp,
        signOut
      }
    }
  ])

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