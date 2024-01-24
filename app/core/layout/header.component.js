angular
  .module('myApp.layout.header', [])
  .component('layoutHeader', {
    templateUrl: 'core/layout/header.html',
    controller: [
      '$rootScope', 'AuthService',
      function($rootScope, AuthService) {
        this.signOut = () => AuthService.signOut()

        $rootScope.$watch('userToken', value => {
         value ? this.isUserSignedIn = true : this.isUserSignedIn = false
        })
      }
    ]
  })