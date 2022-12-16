import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { FlexApiService } from '../services/flex-api.service';
import { StorageService } from '../services/storage.service';
import { Category } from '../interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  api_key = "c92599e7ae08ff763cf0d7f3d7b7590f";
  poster_path = "https://image.tmdb.org/t/p/w500";
  Cat: Category[] = [];
  constructor(private messageService: MessageService, private httpClient: HttpClient, private storageService: StorageService) {
    console.log("movieservice constructor");
  }


  //get stuff async
  getMovies(bla?: Category): Observable<any> {
    let cat = "";
    if (bla) {
      cat = "&with_genres=" + bla?.id;
    }

    return this.httpClient.get
      ("https://api.themoviedb.org/3/discover/movie?api_key=" + this.api_key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1" + cat + "&with_watch_monetization_types=flatrate");

  }

  getDetails(id: number, TV: boolean): Observable<any> {
    if (TV) {
      return this.httpClient.get
        ("https://api.themoviedb.org/3/tv/" + id + "?api_key=" + this.api_key + "&language=en-US");
    }
    else {
      return this.httpClient.get
        ("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + this.api_key + "&language=en-US");
    }
  }

  //get stuff async
  getSeries(bla?: Category): Observable<any> {
    let cat = "";
    if (bla) {
      cat = "&with_genres=" + bla?.id;
    }

    return this.httpClient.get
      ("https://api.themoviedb.org/3/discover/tv?api_key=" + this.api_key + "&language=en-US&sort_by=popularity.desc&page=1" + cat + "&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0");

  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>
      ("https://api.themoviedb.org/3/genre/movie/list?api_key=" + this.api_key + "&language=en-US", { responseType: 'json' });
  }

  addFavorite(movie_id: number, is_TV: boolean): Observable<any> {
    let user = this.storageService.getUser();
    console.log(user.user.id);
    return this.httpClient.post("https://flex-api-45ah.onrender.com/favorites", {
      user_id: user.user.id,
      movie_id,
      is_TV
    });
  }

  removeFavorite(movie_id:number){
    let user = this.storageService.getUser();
    console.log(user.user.id);
    this.httpClient.delete("https://flex-api-45ah.onrender.com/favorites/"+movie_id);
  }

  getFavorites(): Observable<any> {
    let user = this.storageService.getUser();
    return this.httpClient.get("https://flex-api-45ah.onrender.com/favorites/" + user.user.id);
  }

}
