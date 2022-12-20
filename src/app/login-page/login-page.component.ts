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
  errorMessage = '';
  constructor(private flexApi: FlexApiService, private storageService: StorageService, private fb: FormBuilder) {
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
    this.flexApi.getCsrf();
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  Login(): void {
    this.user = this.loginForm.value;
    console.log(this.user);
    this.flexApi.login(this.user.username, this.user.password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log(data);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log(this.errorMessage);
      }
    });
  }

  Signup(): void {
    this.user = this.signupForm.value;
    console.log(this.user);
    this.flexApi.signup(this.user.username, this.user.password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log(data);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log(this.errorMessage);
      }
    });
  }

  Logout(): void {
    this.storageService.logout();
    this.isLoggedIn = false;
  }
}
