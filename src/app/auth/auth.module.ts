import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthGaurdService } from '../utils/gaurds/auth-gaurd.service';

const route : Routes = [
  {
    path : 'sign-in' , component: SignUpComponent ,canActivate :[AuthGaurdService]
  },
  {
    path : 'login' , component: LoginComponent ,canActivate :[AuthGaurdService]
  },
  {
    path : 'forgot' , component: ForgetPasswordComponent 
  },
  {
    path : 'reset' , component: ResetPasswordComponent 
  },
  {
    path : 'change' , component: ChangePasswordComponent ,canActivate :[AuthGaurdService]
  }
]
@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forChild(route),
    MatIconModule
  ]
})
export class AuthModule { }
