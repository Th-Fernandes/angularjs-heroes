angular
  .module('myApp.auth.auth', [])
  .factory('AuthService', [
    '$rootScope', '$location',
    function($rootScope, $location) {
      const isAuth = () => {
        return false
      }

      const redirectUnauthorizedUser = () => {
        $rootScope.$on('$routeChangeStart', (event, next ) => {
          if(next.$$route.private && !isAuth()) 
            $location.path('/sign-in')
        })
      }

      return{ 
        redirectUnauthorizedUser
      }
    }
  ])


