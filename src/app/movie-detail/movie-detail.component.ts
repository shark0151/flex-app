import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie?: any;

  constructor() { }

  ngOnInit(): void {
    if (this.movie) {
      console.log(this.movie);
    }
  }

}
