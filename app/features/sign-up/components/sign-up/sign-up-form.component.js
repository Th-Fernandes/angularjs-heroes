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
    name = {
      first: { value: ''}, 
      last: { value: ''}
    }
    email = {
      value: '',
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    }
    photo = {
      value: '',
      pattern: /(https):\/\/[^ "]/
    }
    gender = {
      value: ''
    }
    codename = {
      value: ''
    }
    phoneNumber = {
      value: '',
      pattern: /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
    }
  }