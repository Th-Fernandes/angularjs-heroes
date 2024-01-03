angular
  .module("myApp.signIn", ['myApp.signIn.signInFormComponent'])
  .config([
    "$routeProvider",
    class {
      constructor($routeProvider) {
        $routeProvider
          .when("/sign-in", {
            templateUrl: 'sign-in/sign-in.html'
          })
      }
    }
  ])
