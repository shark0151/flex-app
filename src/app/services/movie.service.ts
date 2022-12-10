import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, Series } from '../interfaces/movie';
import { MovieList, SeriesList } from '../interfaces/movieLibrary';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Categories, Category } from '../interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  api_key = "c92599e7ae08ff763cf0d7f3d7b7590f";
  poster_path = "https://image.tmdb.org/t/p/w500";
  Cat: Category[] = [];
  //get stuff async
  getMovies(bla?: Category): Observable<any> {
    let cat = "";
    if (bla) {
      cat = "&with_genres=" + bla?.id;
    }

    return this.httpClient.get
      ("https://api.themoviedb.org/3/discover/movie?api_key=" + this.api_key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1" + cat + "&with_watch_monetization_types=flatrate");

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

  constructor(private messageService: MessageService, private httpClient: HttpClient) {
    console.log("movieservice constructor");

  }
}
