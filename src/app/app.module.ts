import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { PasswordlengthcheckComponent } from './passwordlengthcheck/passwordlengthcheck.component';
import { ConfirmPasswordCheckComponent } from './confirmpasswordcheck/confirmpasswordcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    PasswordlengthcheckComponent,
    ConfirmPasswordCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
