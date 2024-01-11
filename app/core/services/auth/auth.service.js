angular
  .module('myApp.auth.authService', [])
  .factory('AuthService', [
    '$rootScope', '$location', '$q', 'JwtService', '$resource', 'API_ENDPOINTS',
    function($rootScope, $location, $q , JwtService, $resource, API_ENDPOINTS) {
      function redirectUnauthorizedUser() { 
        $rootScope.$on('$routeChangeStart', (event, next) => {
          JwtService.onRouteChanging();
          const { isTokenUnavailable } = JwtService.getToken();

          if(next.$$route?.private && isTokenUnavailable) 
            $location.path('/sign-in');
        })
      }

      function signIn({ email, password }) {
        const queryUrl = `http://localhost:3000/heroes?email=${email}&password=${password}`  

        return $resource(queryUrl).query().$promise
          .catch(() => $q.reject('API OFF'))
          .then(res => {
            if(!res[0]) return $q.reject('user not found')
            return res
          })
          .then(() => {
            JwtService.storeOnClient()
            return $q.resolve(true)
          })
      }

      function signPromiseFactory() {
        return {
          isLoading: false,
          errorMessage: null
        }
      }

      function signUp() {
        return $resource(API_ENDPOINTS.HEROES).save({test: 123}).$promise
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


