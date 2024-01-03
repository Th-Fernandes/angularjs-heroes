angular
  .module("myApp.signIn", [])
  .config([
    "$routeProvider",
    class {
      constructor($routeProvider) {
        $routeProvider
          .when("/sign-in", {
            template: 'hello world'
          })
      }
    }
  ])
