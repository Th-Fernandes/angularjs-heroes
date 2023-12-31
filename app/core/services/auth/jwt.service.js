angular.module("myApp.auth.jwtService", []).factory("JwtService", [
  "$rootScope",
  "$window",
  function ($rootScope, $window) {
    const USER_TOKEN_ITEM_KEY = 'JWT';

    function storeOnClient() {
      const userToken = createUserToken();
      localStorage.setItem(USER_TOKEN_ITEM_KEY, JSON.stringify(userToken));
    }

    function createUserToken() {
      const DAY_IN_MILlISECONDS = 86400000; 
      return {
        value: uuidv4(),
        expiry: getDaysInMilliseconds() + DAY_IN_MILlISECONDS,
      };
    }

    function getDaysInMilliseconds() {
      return new Date().getTime()
    }

    function onRouteChanging() {
      const { token, isTokenUnavailable } = getToken();
      if(isTokenUnavailable) return null;

      provideUserTokenGlobally();

      const isUserTokenExpired = getDaysInMilliseconds() > token.expiry;
      if (isUserTokenExpired) removeToken();
      
      return token.value;
    }

    function provideUserTokenGlobally() {
      if(!$rootScope.userToken) 
       $rootScope.userToken = $window.localStorage.getItem(USER_TOKEN_ITEM_KEY);
    }

    function getToken() {
      const userTokenStr = $window.localStorage.getItem(USER_TOKEN_ITEM_KEY);
      return {
        token: JSON.parse( userTokenStr),
        isTokenUnavailable: !userTokenStr
      }
    }
    
    function removeToken() {
      $window.localStorage.removeItem("JWT");
      $rootScope.userToken = null;
    }   

    return {
      storeOnClient,
      onRouteChanging,
      removeToken,
      getToken
    };
  },
]);