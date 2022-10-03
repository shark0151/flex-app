import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieList} from '../interfaces/movieLibrary';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //get stuff async
  getMovies(): Observable<Movie[]> {
    const TheMovies = of(MovieList)
    this.messageService.add('MovieService: It just works');
    return TheMovies;
  }
  constructor(private messageService: MessageService) { }
}
