import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-passwordlengthcheck',
  templateUrl: './passwordlengthcheck.component.html',
  styleUrls: ['./passwordlengthcheck.component.css']
})
export class PasswordlengthcheckComponent implements OnInit {
  @Input() public passwordToCheck: string;
  @Output() passwordStrength = new EventEmitter<boolean>();

  IsPasswordLengthCorrect = false;
   constructor() { }

  ngOnInit(): void {
  }



   private static checkStrength(p) {
    let force = 0;
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;

    const lowerLetters = /[a-z]+/.test(p);
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);

    const flags = [lowerLetters, upperLetters, numbers, symbols];

    return (p.length >= 1 && p.length <= 5) ? true : false;
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes.passwordToCheck.currentValue;
    if (password) {
      this.IsPasswordLengthCorrect = PasswordlengthcheckComponent.checkStrength(password);
    } else {
      this.IsPasswordLengthCorrect = false;
    }
  }

}
