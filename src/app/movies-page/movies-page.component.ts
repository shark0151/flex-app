import { Component, OnInit, Input } from '@angular/core';
import { Movie, Series } from '../interfaces/movie';
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
  animations: [ // <-- animations are not used in this example
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

  ngOnInit(): void {
  }
}
