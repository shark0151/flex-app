import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { FlexApiService } from '../services/flex-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  user: any;
  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private storageService: StorageService, private fb: FormBuilder) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.signupForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  Login(): void {
    this.user = this.loginForm.value;
    console.log(this.user);
  }

  Signup(): void {
    this.user = this.signupForm.value;
    console.log(this.user);
  }


}
