angular.module("myApp.auth.jwtService", []).factory("JwtService", [
  "$rootScope",
  "$window",
  function ($rootScope, $window) {
    const USER_TOKEN_ITEM_KEY = 'JWT';
    let SIGNED_IN_USER_ID = ''

    function storeOnClient(signedInUserId) {
      SIGNED_IN_USER_ID = signedInUserId
      const userToken = createUserToken();
      localStorage.setItem(USER_TOKEN_ITEM_KEY, JSON.stringify(userToken));
    }

    function createUserToken() {
      const DAY_IN_MILlISECONDS = 86400000; 
      return {
        value: SIGNED_IN_USER_ID,
        expiry: getDaysInMilliseconds() + DAY_IN_MILlISECONDS,
      };
    }

    function getDaysInMilliseconds() {
      return new Date().getTime()
    }

    function onRouteChanging() {
      const token = getToken();
      if ( token.isUnavailable ) return null;
      
      provideUserTokenGlobally();

      if ( token.isExpired() ) removeToken();
      return token.value;
    }

    function provideUserTokenGlobally() {
      if(!$rootScope.userToken) 
       $rootScope.userToken = $window.localStorage.getItem(USER_TOKEN_ITEM_KEY);
    }

    function getToken() {
      const userTokenStr = $window.localStorage.getItem(USER_TOKEN_ITEM_KEY);
      return {
        ...JSON.parse( userTokenStr),
        isUnavailable: !userTokenStr,
        isExpired() {
          return getDaysInMilliseconds() > this.expiry
        }
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