import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserRegisterRequest} from "../../../core/models/auth-models/user-register-request";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  public signUpForm!: FormGroup;
  @Input() public isLoading: boolean | null = false;
  @Input() public error: Error | null = null;

  @Output() send: EventEmitter<UserRegisterRequest> = new EventEmitter<UserRegisterRequest>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  signUp() {
    console.log(this.signUpForm.value);

    if (this.signUpForm.invalid) {
      return;
    }
    const data: UserRegisterRequest = this.signUpForm.value;
    this.send.emit(data);
  }
}
