angular.module("myApp.signIn", ["myApp.signIn.signInFormComponent"])
  .config([
    "$routeProvider",
    class {
      constructor($routeProvider) {
        $routeProvider.when("/sign-in", {
          template: "<sign-in-form></sign-in-form>",
          controller: RedirectSignedInUserController,
        });
      }
    },
  ]);

const RedirectSignedInUserController = [
  "$location", "JwtService",
  function ($location, JwtService) {
    const token = JwtService.getToken();
    if (!token.isUnavailable) $location.path("/heroes");
  },
];
