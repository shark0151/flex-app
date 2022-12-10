import { Component, OnInit, Input } from '@angular/core';
import { Movie, Series } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';
import { Categories } from '../interfaces/categories';


@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  ngOnInit(): void {
  }
}
