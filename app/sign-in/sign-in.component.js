angular
  .module('myApp.signIn.signInFormComponent', [])
  .component([
    function() {
      this.passwordValidation = '^(?:[^A-Z]*[A-Z]){2}[^A-Z]*$'/* it needs to have 2 capital letters */
      this.password = '';

      "/^[a-zA-Z0-9]*$/"
    }
  ])