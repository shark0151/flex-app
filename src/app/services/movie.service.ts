import { Injectable } from '@angular/core';
import { Movie,Series } from '../interfaces/movie';
import { MovieList, SeriesList} from '../interfaces/movieLibrary';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //get stuff async
  getMovies(): Observable<Movie[]> {
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
  constructor(private messageService: MessageService) { 
    console.log("movieservice constructor");
  }
}
