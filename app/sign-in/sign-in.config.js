angular
  .module("myApp.signIn", ['myApp.signIn.signInFormComponent'])
  .config([
    "$routeProvider",
    class {
      constructor($routeProvider) {
        $routeProvider
          .when("/sign-in", {
            template: '<sign-in-form></sign-in-form>'
          })
      }
    }
  ])
