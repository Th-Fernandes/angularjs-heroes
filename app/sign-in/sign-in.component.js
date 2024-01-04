angular
  .module('myApp.signIn.signInFormComponent', [])
  .component('signInForm', {
    templateUrl: 'sign-in/sign-in.html',
    controller: [
      'AuthService',
      function(AuthService) {
        this.passwordValidation = '^(?:[^A-Z]*[A-Z]){2}[^A-Z]*$'/* it needs to have 2 capital letters */
        this.userCredentials = {
          email: '',
          password: ''
        }

        this.signIn = () => {
          AuthService.signIn({...this.userCredentials})
            .then(() => {
              
            })
            .catch(err => console.error('error: ', err));
        }
      }
    ]
  })