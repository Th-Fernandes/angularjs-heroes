angular
  .module('myApp.signIn.signInFormComponent', [])
  .component('signInForm', {
    templateUrl: 'sign-in/sign-in.html',
    controller: [
      'AuthService' ,
      function(AuthService) {
        this.passwordValidation = '^(?:[^A-Z]*[A-Z]){2}[^A-Z]*$'/* it needs to have 2 capital letters */
        this.userCredentials = {
          email: '',
          password: ''
        }
        this.isSignInLoading = false;

        this.signIn = () => {
          this.isSignInLoading = true;

          AuthService.signIn({...this.userCredentials})
            .then((res) => console.log(res) )
            .catch(err => console.error('error: ', err))
            .finally(() => this.isSignInLoading = false)
        }
      }
    ]
  })