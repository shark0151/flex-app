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
  li: any;
  lis = [];
  //get stuff async
  getMovies(): Observable<any> {
    return this.httpClient.get
      ("https://api.themoviedb.org/3/discover/movie?api_key=" + this.api_key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate");
    const TheMovies = of(MovieList)
    this.messageService.showNotification('MovieService: It just works');
    return TheMovies;
  }

  //get stuff async
  getSeries(): Observable<Series[]> {
    const TheSeries = of(SeriesList)
    this.messageService.showNotification('SeriesService: It just works');
    return TheSeries;
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>
      ("https://api.themoviedb.org/3/genre/movie/list?api_key=" + this.api_key + "&language=en-US", { responseType: 'json' });
  }

  constructor(private messageService: MessageService, private httpClient: HttpClient) {
    console.log("movieservice constructor");

  }
}
