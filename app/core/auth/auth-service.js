angular
  .module('myApp.auth.auth', [])
  .factory('AuthService', [
    '$rootScope', '$location', '$q', 'JwtService',
    function($rootScope, $location, $q , JwtService) {
      function redirectUnauthorizedUser() {
        const isUserSignedIn = () => JwtService.getToken() !== null;

        $rootScope.$on('$routeChangeStart', (event, next ) => {
          if(next.$$route?.private && !isUserSignedIn()) 
            $location.path('/sign-in')
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

      return{ 
        redirectUnauthorizedUser,
        signIn
      }
    }
  ])


