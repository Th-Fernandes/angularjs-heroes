angular
  .module('myApp.signIn.signInFormComponent', [])
  .component('signInForm', {
    templateUrl: 'features/sign-in/components/sign-in/sign-in.html',
    controller: [
      '$location', 'AuthService' ,
      function($location, AuthService) {
        this.passwordValidation = '^(?:[^A-Z]*[A-Z]){2}[^A-Z]*$'/* it needs to have 2 capital letters */
        this.userCredentials = { email: '', password: '' };
        this.isSignInLoading = false;

        this.signIn = () => {
          this.isSignInLoading = true;

          AuthService.signIn({...this.userCredentials})
            .catch(() => cleanUpInputs())
            .then(isSignInSucceed => {
              if (isSignInSucceed) $location.path('/heroes')
            })
            .finally(() => this.isSignInLoading = false)
        }

        const cleanUpInputs = () => {
          const cleanedUpCredentials= { email: '', password: ''};
          Object.assign(this.userCredentials, cleanedUpCredentials);
        }
      }
    ]
  })