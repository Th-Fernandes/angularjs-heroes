angular
  .module('myApp.layout.header', [])
  .component('layoutHeader', {
    templateUrl: 'core/layout/header.html',
    controller: [
      '$rootScope',
      function($rootScope) {
        $rootScope.$watch('userToken', value => {
         value ? this.isUserSignedIn = true : this.isUserSignedIn = false
        })
      }
    ]
  })