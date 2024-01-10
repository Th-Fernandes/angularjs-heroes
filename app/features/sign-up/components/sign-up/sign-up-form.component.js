angular
  .module('myApp.signUp.signUpFormComponent', [])
  .component('signUpForm', {
    templateUrl: 'features/sign-up/components/sign-up/sign-up-form.html',
    controller: [
      function() {
        this.inputs = new SignUpInputGroupFactory();

        this.onSubmitSignUp = () => {
          console.log(this.inputs)
        }
      }
    ]
  });


  class SignUpInputGroupFactory {
    name = {first: '', name: ''}
    email = {
      value: '',
      pattern: ''
    }
    photo = {
      value: '',
      pattern: '/a/'
    }
    gender = {
      value: ''
    }
    codename = {
      value: ''
    }
    phoneNumber = {
      value: '',
      pattern: '/a/',
    }
  }