import { Component, OnInit ,Input} from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';
import { Categories } from '../interfaces/categories';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
  animations: [ // <-- add your animations here
    trigger('NextP', [
      // ...
      state('0', style({
        transform: 'translateX(0%)'
      })),
      state('1', style({
        transform: 'translateX(10%)'
      })),
      transition('0 => 1', [
        animate('1s')
      ]),
      transition('1 => 0', [
        animate('1s')
      ]),
    ]),
    trigger('PrevP', [
      // ...
      state('prev', style({
        transform: 'translateX(0%)'
      })),
      state('none', style({
        transform: 'translateX(100%)'
      })),
      transition('prev => none', [
        animate('0.5s')
      ]),
      transition('none => prev', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class MoviesPageComponent implements OnInit {
  @Input() category?: string;

  movies: Movie[] = [];
  pageofMovies: Movie[] = [];
  page: number = 1;
  pageSize: number = 12;
  selectedMovie?: Movie;
  prevpage: boolean = false;
  nextpage: boolean = false;
  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
    this.pageofMovies = this.paginateMovies(this.movies, this.page, this.pageSize);
  }
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(movie);
  }
  getMovies(): void {
    this.MovieService.getMovies().subscribe(returnedObject => this.movies = returnedObject);
    if(this.category)
    {
      this.movies = this.getMoviesByCategory(this.category);
    }
  }
  paginateMovies(movies: Movie[], page: number, pageSize: number): Movie[] {
    
    return movies.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
  }

  getMoviesByCategory(param: string): Movie[] {
    return this.movies.filter(movie => Categories[movie.category] === param);
  }

  prev(): void {
    if (this.page > 1) {
      this.prevpage = true;
      this.nextpage = false;
      this.page--;
      this.pageofMovies = this.paginateMovies(this.movies, this.page, this.pageSize);
    }

  }

  next(): void {
    if (this.page < this.movies.length / this.pageSize) {
      this.prevpage = false;
      this.nextpage = true;
      this.page++;
      this.pageofMovies = this.paginateMovies(this.movies, this.page, this.pageSize);
    }

  }
}
