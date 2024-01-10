

angular.module("myApp.signIn.signInFormComponent", []).component("signInForm", {
  templateUrl: "features/sign-in/components/sign-in/sign-in.html",
  controller: [
    "$location",
    "AuthService",
    function ($location, AuthService) {
      this.inputs = new InputGroupFactory();
      this.isSignInLoading = false;
      this.onSubmitSignInCredentials = () => {
        this.isSignInLoading = true;

        AuthService.signIn(this.inputs.values)
          .catch(cleanUpInputs)
          .then((hasSignInSucceded) => hasSignInSucceded && $location.path("/heroes"))
          .finally(() => this.isSignInLoading = false)
      };

      const cleanUpInputs = () => {
        const cleanedUpCredentials = new InputGroupFactory();
        Object.assign(this.inputs , cleanedUpCredentials);
      };
    },
  ],
});


class InputGroupFactory {
  email = {
      value: '',
      pattern: /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/i
  }

  password = {
      value: "",
      pattern: /^([^A-Z]*[A-Z][^A-Z]*){2}.*$/,
  }

  get values() {
    return { email: this.email.value, password: this.password.value }
  }
}