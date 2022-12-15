import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
const AUTH_API = 'https://flex-api-45ah.onrender.com/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class FlexApiService {

  constructor(private http: HttpClient) { }

  login(name: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      name,
      password
    }, httpOptions);
  }

  signup(name: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'user', {
      name,
      password
    }, httpOptions);
  }
}
