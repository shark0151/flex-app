import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';
import { Categories, Category } from '../interfaces/categories';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  categories: Category[] = [];


  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
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
