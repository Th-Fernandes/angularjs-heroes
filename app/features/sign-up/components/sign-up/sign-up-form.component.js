angular
  .module('myApp.signUp.signUpFormComponent', [])
  .component('signUpForm', {
    templateUrl: 'features/sign-up/components/sign-up/sign-up-form.html',
    controller: [
      '$location', 'AuthService', 
      function($location, AuthService) {
        this.inputs = new SignUpInputGroupFactory();
        this.signUpPromise = AuthService.signPromiseFactory();

        this.onSubmitSignUp = () => {
          this.signUpPromise.isLoading = true;

          AuthService.signUp(this.inputs.values)
            .catch(e => { this.signUpPromise.errorMessage = e })
            .then(hasSucceded => hasSucceded && $location.path('/heroes'))
            .finally(() => this.signUpPromise.isLoading = false)
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
      value: '',
      pattern: ''
    }
    codename = {
      value: '',
      pattern: ''
    }
    phoneNumber = {
      value: '',
      pattern: /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
    }
    password = {
      value: '',
      pattern: ''
    }

    get values() {
      return {
        name: {
          first: this.name.first.value,
          last: this.name.last.value
        },
        email: this.email.value,
        photo: this.photo.value,
        gender: this.gender.value,
        codename: this.codename.value,
        phoneNumber: this.phoneNumber.value,
        password: this.password.value
      }
    }
  }