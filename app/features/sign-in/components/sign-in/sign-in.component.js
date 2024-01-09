angular
  .module('myApp.signIn.signInFormComponent', [])
  .component('signInForm', {
    templateUrl: 'features/sign-in/components/sign-in/sign-in.html',
    controller: [
      '$location', 'AuthService' ,
      function($location, AuthService) {
        this.inputValidations = {
          email: /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/i,
          password: /^([^A-Z]*[A-Z][^A-Z]*){2}.*$/
        }
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