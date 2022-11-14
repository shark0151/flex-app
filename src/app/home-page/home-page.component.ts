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


  categories: string[] = [];


  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
    for (let category in Categories) {
      if (isNaN(Number(category))) {
        this.categories.push(category);
      }
      //console.log(Categories);
    }
  }
}
