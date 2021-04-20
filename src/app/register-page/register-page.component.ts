import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  isValidPassword= false;
  constructor(private fb: FormBuilder) {
    
   }

   ngOnInit() {
    this.registerForm = this.fb.group({
      title: ['', Validators.required],
      fname:['', Validators.required],
      lname:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      accepttc: [false, Validators.requiredTrue],
      cpassword: ['', [Validators.required]],
    },
      {
        validator: [this.CheckPassandCPass('password', 'cpassword')]
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

   onSubmit() {
    this.submitted = true;
    if(this.registerForm.valid)
    {
      this.submitted = false;
      alert("Succesfully Registered");
      this.registerForm.reset();
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

 
  CheckPassandCPass(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const pText = formGroup.controls[password];
      const cpText = formGroup.controls[confirmPassword];

      if (!pText || !cpText) {
        return null;
      }

      if (cpText.errors && !cpText.errors.passwordMismatch ) {
        return null;
      }

      if (pText.value !== cpText.value) {
        cpText.setErrors({ passwordMismatch: true });
      } 
      else {
        cpText.setErrors(null);
      }
    }
  }

 

  isPasswordValid(result: boolean) {
    this.isValidPassword = result;
  }
}

