angular
  .module('myApp.auth.auth', [])
  .factory('AuthService', [
    '$rootScope', '$location', '$q', '$window',
    function($rootScope, $location, $q, $window) {
      function redirectUnauthorizedUser() {
        $rootScope.$on('$routeChangeStart', (event, next ) => {
          if(next.$$route?.private && !isUserSignedIn()) 
            $location.path('/sign-in')
        })
      }

      function isUserSignedIn() {
        return $window.localStorage.getItem('JWT');
      }

      function signIn({email, password}) {
        // $q is a built-in angularjs library to work with async requests
        return $q((resolve, reject) => {
          setTimeout(() => {
            if(email && password) {
              storageJWTOnClient()
              resolve('request worked just fine')
              return 
            }
            reject('invalid credentials. Please try again')
          }, 4000)
        })
      }

      function storageJWTOnClient() {
        $window.localStorage.setItem('JWT', 'test');
      }

      return{ 
        redirectUnauthorizedUser,
        signIn
      }
    }
  ])


