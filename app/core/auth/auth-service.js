angular
  .module('myApp.auth.auth', [])
  .factory('AuthService', [
    '$rootScope', '$location', '$q', 'JwtService',
    function($rootScope, $location, $q , JwtService) {
      function redirectUnauthorizedUser() { 
        $rootScope.$on('$routeChangeStart', (event, next) => {
          JwtService.onRouteChanging();
          const { isTokenUnavailable } = JwtService.getToken();

          if(next.$$route?.private && isTokenUnavailable) 
            $location.path('/sign-in');
        })
      }

      function signIn({ email, password }) {
        // $q is a built-in angularjs library to work with async requests
        return $q((resolve, reject) => {
          setTimeout(() => {
            if(email && password) {
              JwtService.storeOnClient();
              resolve(true);
              return 
            }
            reject('invalid credentials. Please try again')
          }, 400)
        })
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


