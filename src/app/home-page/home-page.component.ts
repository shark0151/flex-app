import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';
import { Categories } from '../interfaces/categories';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies: Movie[] = [];
  categories: string[] =[];
  selectedMovie?: Movie;
  
  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
    for (let category in Categories) {
      if (isNaN(Number(category))) {
        this.categories.push(category);
      }
      //console.log(Categories);
    }
    this.getMovies();
  }
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(movie);
  }
  getMovies(): void {
    this.MovieService.getMovies().subscribe(returnedObject => this.movies = returnedObject);
  }
 //deprecated
  isMovieofCategory(movie: Movie, category: string): boolean {
    return Categories[movie.category] === category;
  }

  getMoviesByCategory(param: string): Movie[] {
    return this.movies.filter(movie => Categories[movie.category] === param);
  }
}
