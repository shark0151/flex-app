import { Injectable } from '@angular/core';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user.user));
    //window.sessionStorage.setItem('token', user.token);
    //localStorage.setItem('token', user.token);
    //localStorage.setItem('user', JSON.stringify(user.user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  public getToken(): any {
    return window.sessionStorage.getItem('token');
  }

  public logout(): void {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem(USER_KEY);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
