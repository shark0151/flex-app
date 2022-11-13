import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  
  movies: Movie[] = [];
  selectedMovie?: Movie;

  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(movie);
  }
  getMovies(): void {
    this.MovieService.getMovies().subscribe(returnedObject => this.movies = returnedObject);
  }

}
