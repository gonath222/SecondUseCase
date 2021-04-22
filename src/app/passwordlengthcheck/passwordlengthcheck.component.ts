import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-passwordlengthcheck',
  template: `
  <span class="text-danger font-small" [hidden]="!IsPasswordLengthCorrect">
      Password must be atleast 6 characters
  </span> 
  `
})
export class PasswordlengthcheckComponent implements OnInit {
  @Input('PasswordCheck') public passwordToCheck: string;
  @Output('isValidPassword') isValidPassword = new EventEmitter<boolean>();
  IsPasswordLengthCorrect = false;

  ngOnInit(): void {
  }

  ngOnChanges(changes: { [passwordText: string]: SimpleChange }): void {
    const password = changes.passwordToCheck.currentValue;
    if (password) {
      this.IsPasswordLengthCorrect = (password.length >= 1 && password.length <= 5) ? true : false;
    } else {
      this.IsPasswordLengthCorrect = false;
    }
    this.isValidPassword.emit(this.IsPasswordLengthCorrect);
  }

}
