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
  isValidCPassword = false;
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
 
    IsPasswordValid(result: boolean) {
    this.isValidPassword = result;
  }

  IsCPasswordValid(result: boolean) {
    this.isValidCPassword = result;
  }
}

