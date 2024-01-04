angular
  .module('myApp.auth.jwt', [])
  .factory('JwtService', [
    '$rootScope','$window', 
    function($rootScope , $window) {
      function storeOnClient() {
        $window.localStorage.setItem('JWT', 'test');
      }

      function getToken() {
        if(!$rootScope.userToken) {
          $rootScope.userToken = $window.localStorage.getItem('JWT');
        }
          
        return $rootScope.userToken;
      }

      return {
        storeOnClient,
        getToken
      }
    }
  ])