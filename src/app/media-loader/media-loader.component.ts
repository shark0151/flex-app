import { Component, OnInit, Input, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Movie, Series } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';
import { Categories, Category } from '../interfaces/categories';
import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

enum PageType {
  Home,
  Movies,
  Series,
  Favorites
}

@Component({
  selector: 'app-media-loader',
  templateUrl: './media-loader.component.html',
  styleUrls: ['./media-loader.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaLoaderComponent implements OnInit, AfterViewInit {
  @Input() category?: Category;
  @Input() pageType: PageType = 0;
  @ViewChild("virtualScroll", { static: true })
  public virtualScrollViewport!: CdkVirtualScrollViewport;

  mediaList: any[] = [];
  series: any[] = [];
  pageofMovies: Movie[] = [];
  page: number = 0;
  pageSize: number = 12;
  selectedMovie?: Movie;
  hidePrev?: boolean;
  hideNext?: boolean;

  constructor(private MovieService: MovieService, private ref: ChangeDetectorRef) { }


  ngOnInit(): void {

    this.getMedia();
    this.virtualScrollViewport.elementScrolled()
      .subscribe(event => {
        this.OnScroll();
      });
  }

  ngAfterViewInit(): void {
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
    else if (this.pageType == PageType.Favorites) {
      //this.pageSize = 50;
    }

    //this.pageofMovies = this.mediaList;
  }

  getMovies(): void {
    this.MovieService.getMovies(this.category).subscribe((data) => {
      let parse = JSON.parse(JSON.stringify(data));
      this.mediaList = parse.results;
      console.log(this.mediaList);
      let numberofPages = Math.floor(this.mediaList.length / this.pageSize);
      this.hideNext = numberofPages == 0;
      this.hidePrev = true;
      this.mediaList.forEach((movie) => {
        if (movie.poster_path != null) { movie.poster_path = this.MovieService.poster_path + movie.poster_path; }
        else { movie.poster_path = this.MovieService.poster_path + "/vbLxDKfo8fYC8ISKKrJczNbGKLP.jpg" }
      });
      this.ref.detectChanges();
    });
  }

  getSeries(): void {
    this.MovieService.getSeries(this.category).subscribe((data) => {
      let parse = JSON.parse(JSON.stringify(data));
      this.series = parse.results;
      this.series.forEach((movie) => {
        movie.original_title = movie.name;
        if (movie.poster_path != null) { movie.poster_path = this.MovieService.poster_path + movie.poster_path; }
        else { movie.poster_path = this.MovieService.poster_path + "/vbLxDKfo8fYC8ISKKrJczNbGKLP.jpg" }
        movie.release_date = movie.first_air_date;
      });
      this.mediaList = this.mediaList.concat(parse.results);
      console.log(this.mediaList);
      let numberofPages = Math.floor(this.mediaList.length / this.pageSize);
      this.hideNext = numberofPages == 0;
      this.hidePrev = true;

      this.ref.detectChanges();
    });
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
