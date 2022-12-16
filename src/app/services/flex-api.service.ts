import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
const AUTH_API = 'https://flex-api-45ah.onrender.com/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin': '*','withCredentials': 'true', 'Access-Control-Allow-Credentials': 'true' })
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
    }, httpOptions );
  }

  signup(name: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      name,
      password
    }, httpOptions);
  }

  getFavorites(user_id: number): Observable<any> {
    return this.http.get(AUTH_API + 'favorites/' + user_id);
  }

  addFavorite(user_id: number, movie_id: number, is_TV: boolean): Observable<any> {
    return this.http.post(AUTH_API + 'favorites', {
      user_id,
      movie_id,
      is_TV
    }, httpOptions);
  }
}
