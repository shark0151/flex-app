import { Component, OnInit,Input } from '@angular/core';
import { Movie, Series } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';
import { Categories } from '../interfaces/categories';
import {ChangeDetectionStrategy,ViewEncapsulation} from '@angular/core'; 

enum PageType {
  Home,
  Movies,
  Series
}
@Component({
  selector: 'app-media-loader',
  templateUrl: './media-loader.component.html',
  styleUrls: ['./media-loader.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaLoaderComponent implements OnInit {
  @Input() category?: string;
  @Input() pageType: PageType = 0;

  mediaList: Movie[] = [];
  series: Series[] = [];
  pageofMovies: Movie[] = [];
  page: number = 0;
  pageSize: number = 12;
  selectedMovie?: Movie;
  hidePrev: boolean = false;
  hideNext: boolean = false;

  constructor(private MovieService: MovieService) { }

  
  ngOnInit(): void {
    this.getMedia();
    let numberofPages = Math.floor(this.mediaList.length / this.pageSize);
    this.hidePrev = true;
    if(numberofPages == 0)
    {
      this.hideNext = true;
    }
  }
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(movie);
  }

  getMedia(): void {
   
    if (this.pageType == PageType.Home)
    {
      this.getMovies();
      this.getSeries();
      this.mediaList = this.mediaList.concat(this.series);
      this.pageSize = 12;
    }
    else if (this.pageType == PageType.Movies)
    {
      this.pageSize = 50;
      this.getMovies();
    }
    else if (this.pageType == PageType.Series)
    {
      this.pageSize = 50;
      this.getSeries();
      this.mediaList = this.mediaList.concat(this.series);
    }
    if (this.category) {
      this.mediaList = this.getMoviesByCategory(this.category);
    }

    this.pageofMovies = this.mediaList;
  }

  getMovies(): void {
    this.MovieService.getMovies().subscribe(returnedObject => this.mediaList = returnedObject);    
  }

  getSeries(): void {
    this.MovieService.getSeries().subscribe(returnedObject => this.series = returnedObject);
  }
  paginateMovies(movies: Movie[], page: number, pageSize: number): Movie[] {
    return movies.slice((page) * pageSize, (page) * pageSize + pageSize);
  }

  getMoviesByCategory(param: string): Movie[] {
    return this.mediaList.filter(movie => Categories[movie.category] === param);
  }

  prev(): void {
    if (this.page > 0) {
      this.hideNext = false;
      this.page--;
      this.pageofMovies = this.paginateMovies(this.mediaList, this.page, this.pageSize);
    }
    if (this.page == 0) {
      this.hidePrev = true;
    }
    

  }

  next(): void {
    if (this.page < Math.floor(this.mediaList.length / this.pageSize) ){
      this.hidePrev = false;
      this.page++;
      this.pageofMovies = this.paginateMovies(this.mediaList, this.page, this.pageSize);
    }
    if (this.page >= Math.floor(this.mediaList.length / this.pageSize)) 
    {
      this.hideNext = true;
    }
  }

}
