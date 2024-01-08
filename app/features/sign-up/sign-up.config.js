angular
  .module('myApp.signUp', ['myApp.signUp.signUpFormComponent'])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/sign-up', {
          template: '<sign-up-form></sign-up-form>'
        })        
    }
  ])  

