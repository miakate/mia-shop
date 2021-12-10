import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {SignInComponent} from "./containers/sign-in/sign-in.component";
import {ForgotPasswordComponent} from "./containers/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./containers/reset-password/reset-password.component";
import {SignUpComponent} from "./containers/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: SignUpComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'reset-password/:hash',
        component: ResetPasswordComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
