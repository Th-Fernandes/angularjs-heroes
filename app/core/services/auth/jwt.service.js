export class JWTService {
  #USER_TOKEN_ITEM_KEY = 'JWT';
  #SIGNED_IN_USER_ID = '';

  constructor($window, $rootScope) {
    this.$window = $window;
    this.$rootScope = $rootScope;
  }

  storeOnClient(signedInUserId) {
    this.#SIGNED_IN_USER_ID = signedInUserId;
    const userToken = this.#createUserToken();
    localStorage.setItem(this.#USER_TOKEN_ITEM_KEY, JSON.stringify(userToken));
  }

  #createUserToken() {
    const DAY_IN_MILlISECONDS = 86400000; 
    return {
      value: this.#SIGNED_IN_USER_ID,
      expiry: this.#getDaysInMilliseconds() + DAY_IN_MILlISECONDS,
    };
  }

  #getDaysInMilliseconds() {
    return new Date().getTime()
  }

  onRouteChanging() {
    const token = this.getToken();
    if ( token.isUnavailable ) return null;
    this.#provideUserTokenGlobally();
      
    if ( token.isExpired() ) this.removeToken();
    return token.value;
  }
    
  #provideUserTokenGlobally() {
    if(!this.$rootScope.userToken) 
      this.$rootScope.userToken = this.$window.localStorage.getItem(this.#USER_TOKEN_ITEM_KEY);
  }

  getToken() {
    const userTokenStr = this.$window.localStorage.getItem(this.#USER_TOKEN_ITEM_KEY);
    return {
      ...JSON.parse(userTokenStr),
      isUnavailable: !userTokenStr,
      isExpired: () => {
        return this.#getDaysInMilliseconds() > this.expiry
      }
    }
  }
    
  removeToken() {
    this.$window.localStorage.removeItem("JWT");
    this.$rootScope.userToken = null;
  }  
}