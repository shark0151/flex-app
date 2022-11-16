import { Component, OnInit, Input, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Movie, Series } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';
import { Categories } from '../interfaces/categories';
import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

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
export class MediaLoaderComponent implements OnInit, AfterViewInit {
  @Input() category?: string;
  @Input() pageType: PageType = 0;
  @ViewChild("virtualScroll", { static: true })
  public virtualScrollViewport!: CdkVirtualScrollViewport;


  mediaList: Movie[] = [];
  series: Series[] = [];
  pageofMovies: Movie[] = [];
  page: number = 0;
  pageSize: number = 12;
  selectedMovie?: Movie;
  hidePrev?: boolean;
  hideNext?: boolean;

  constructor(private MovieService: MovieService, private ref: ChangeDetectorRef) { }


  ngOnInit(): void {

    this.getMedia();
    let numberofPages = Math.floor(this.mediaList.length / this.pageSize);

    this.virtualScrollViewport.elementScrolled()
      .subscribe(event => {
        this.OnScroll();
      });

    
    this.hideNext = numberofPages == 0;
    this.hidePrev = true;
    
  }

  ngAfterViewInit(): void {


  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(movie);
  }

  getMedia(): void {

    if (this.pageType == PageType.Home) {
      this.getMovies();
      this.getSeries();
      this.mediaList = this.mediaList.concat(this.series);
      //this.pageSize = 12;
    }
    else if (this.pageType == PageType.Movies) {
      //this.pageSize = 50;
      this.getMovies();
    }
    else if (this.pageType == PageType.Series) {
      //this.pageSize = 50;
      this.getSeries();
      this.mediaList = this.mediaList.concat(this.series);
    }
    if (this.category) {
      this.mediaList = this.getMoviesByCategory(this.category);
    }

    //this.pageofMovies = this.mediaList;
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

    let viewportSize = this.virtualScrollViewport.getViewportSize();
    let scrollOffset = this.virtualScrollViewport.measureScrollOffset('right');


    this.virtualScrollViewport.scrollTo({
      right: scrollOffset + viewportSize / 4,
      behavior: "smooth"
    })

  }

  next(): void {

    let viewportSize = this.virtualScrollViewport.getViewportSize();
    let scrollOffset = this.virtualScrollViewport.measureScrollOffset('left');


    this.virtualScrollViewport.scrollTo({
      left: scrollOffset + viewportSize / 4,
      behavior: "smooth"
    })

  }

  OnScroll(): void {

    let scrollOffsetLeft = this.virtualScrollViewport.measureScrollOffset('left');
    let scrollOffsetRight = this.virtualScrollViewport.measureScrollOffset('right');
    let viewportSize = this.virtualScrollViewport.getViewportSize();
    this.hideNext = scrollOffsetRight == 0;
    this.hidePrev = scrollOffsetLeft == 0;


    this.ref.detectChanges();
  }

}
