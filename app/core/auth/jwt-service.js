angular
  .module('myApp.auth.jwt', [])
  .factory('JwtService', [
    '$window', 
    function($window) {
      function storeOnClient() {
        $window.localStorage.setItem('JWT', 'test');
      }

      function getToken() {
        return $window.localStorage.getItem('JWT');
      }

      return {
        storeOnClient,
        getToken
      }
    }
  ])