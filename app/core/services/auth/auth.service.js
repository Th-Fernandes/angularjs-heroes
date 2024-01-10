angular
  .module('myApp.auth.authService', [])
  .factory('AuthService', [
    '$rootScope', '$location', '$q', 'JwtService', '$resource',
    function($rootScope, $location, $q , JwtService, $resource) {
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
            return true
          })
          

        // $q is a built-in angularjs library to work with async requests
        // return $q((resolve, reject) => {
        //   setTimeout(() => {
        //     if(email && password) {
        //       JwtService.storeOnClient();
        //       resolve(true);
        //       return 
        //     }
        //     reject('invalid credentials. Please try again')
        //   }, 400)
        // })
      }

      function signOut() {
        JwtService.removeToken();
        $location.path('/sign-in');
      }

      return{ 
        redirectUnauthorizedUser,
        signIn,
        signOut
      }
    }
  ])


