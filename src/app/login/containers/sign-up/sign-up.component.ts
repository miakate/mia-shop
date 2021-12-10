import {Component, OnInit} from '@angular/core';
import {UserRegisterRequest} from "../../../core/models/auth-models/user-register-request";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // isSignUpLoading$ = this.store$.select(selectIsSignUpLoading);
  // signUpError$ = this.store$.select(selectSignUpError);

  // @ts-ignore
  constructor() {
  }

  ngOnInit(): void {
  }

  submit(data: UserRegisterRequest) {
    // this.store$.dispatch(LoginActions.signUp({data}));
  }

}
