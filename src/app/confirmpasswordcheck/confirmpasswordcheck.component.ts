import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-confirmpasswordcheck',
  template: `
  <span class="text-danger font-small"
  [ngStyle]="{ 'display' : isConfirmPasswordValid ? 'block' : 'none'}">
   Passwords must match
   </span>
  `
})
export class ConfirmPasswordCheckComponent implements OnInit {
    @Input('PasswordText') public passwordText: string;
    @Input('CPasswordText') public cPasswordText: string;
    @Output('CPasswordValid') isCPasswordValid = new EventEmitter<boolean>();
    isConfirmPasswordValid = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.isConfirmPasswordValid = false;
  }

  ngOnChanges(): void {
    const cpassword = this.cPasswordText;
    const password = this.passwordText;
    if (cpassword != "" && password != "" && password.length >=6) {
      this.isConfirmPasswordValid = cpassword !== password ? true : false;
    } 
    else if (cpassword != "" && password == "") {
        this.isConfirmPasswordValid = true;
      } 
    else {
      this.isConfirmPasswordValid = false;
    }
    this.isCPasswordValid.emit(this.isConfirmPasswordValid);
  }

}
