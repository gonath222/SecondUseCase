import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordlengthcheckComponent } from './passwordlengthcheck.component';

describe('PasswordlengthcheckComponent', () => {
  let component: PasswordlengthcheckComponent;
  let fixture: ComponentFixture<PasswordlengthcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordlengthcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordlengthcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
