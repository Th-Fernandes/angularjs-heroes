angular
  .module('myApp.auth.auth', [])
  .factory('AuthService', [
    '$rootScope', '$location', '$q',
    function($rootScope, $location, $q) {
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
        // $q is a built-in angularjs library to work with async requests
        return $q((resolve, reject) => {
          setTimeout(() => {
            if(email && password) return resolve('request worked just fine')
            reject('invalid credentials. Please try again')
          }, 4000)
        })
      }

      return{ 
        redirectUnauthorizedUser,
        signIn
      }
    }
  ])


