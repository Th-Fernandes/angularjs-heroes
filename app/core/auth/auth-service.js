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

      const signIn = ({email, password}) => {
        console.log(email, password);
        $location.path('/heroes')
      }

      return{ 
        redirectUnauthorizedUser,
        signIn
      }
    }
  ])


