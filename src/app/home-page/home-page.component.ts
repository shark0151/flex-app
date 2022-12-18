import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';
import { FlexApiService } from '../services/flex-api.service';
import { Categories, Category } from '../interfaces/categories';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  categories: Category[] = [];


  constructor(private MovieService: MovieService, private api:FlexApiService ) { }

  ngOnInit(): void {
    this.api.getcsrf().subscribe((data) => {
      console.log(data);
      console.log(data.csrf_token);
    });
    this.MovieService.getCategories().subscribe((data) => {
      let parse = JSON.parse(JSON.stringify(data));
      Categories.setCategories(parse.genres);
      Categories.categories.forEach((category) => {
        this.categories.push(category);
      });
      console.log(this.categories);
    });
  }
}
