import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder ,ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  passwordIsValid = false;
  constructor(private fb: FormBuilder) {
    
   }

   ngOnInit() {
    this.registerForm = this.fb.group({
      title: ['', Validators.required],
      fname:['', Validators.required],
      lname:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.patternValidator()])],
      accepttc: [false, Validators.requiredTrue],
      cpassword: ['', [Validators.required]],
    },
      {
        validator: [this.MatchPassword('password', 'cpassword')]
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

   onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.table(this.registerForm.value);
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  LengthCheck()
  {
   
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !(confirmPasswordControl.errors.passwordMismatch || passwordControl.errors.lengthError) ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else if(passwordControl.get.length >=1 && passwordControl.get.length <=5) {
        passwordControl.setErrors({ lengthError: true });
      }
      else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      //const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const regex = new RegExp(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/);
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }
 
  passwordValid(event) {
    this.passwordIsValid = event;
  }
  
}
