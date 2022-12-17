import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { FlexApiService } from '../services/flex-api.service';
import { StorageService } from '../services/storage.service';
import { OverlayRef } from '@angular/cdk/overlay';
@Component({
  selector: 'app-movie-overlay',
  templateUrl: './movie-overlay.component.html',
  styleUrls: ['./movie-overlay.component.css'],
})
export class MovieOverlayComponent implements OnInit {
  @Input() movie?: any;
  movieDetails?: any;
  overlayRef?: OverlayRef;
  isTv: boolean = false;
  isLoggedIn?: boolean;
  added?: boolean;
  constructor(
    private movieService: MovieService,
    private ref: ChangeDetectorRef,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.isTv = this.movie.first_air_date != null;
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.movieService.getDetails(this.movie.id, this.isTv).subscribe({
      next: (data) => {
        let parse = JSON.parse(JSON.stringify(data));
        this.movieDetails = parse;
        console.log(data);
        this.movieDetails.backdrop_path =
          'https://image.tmdb.org/t/p/original' +
          this.movieDetails.backdrop_path;
        if(this.isLoggedIn)
          this.checkIfAdded();
        this.ref.detectChanges();
      },
    });
  }

  addFavorite() {
    this.movieService.addFavorite(this.movie.id, this.isTv).subscribe({
      next: (data) => {
        console.log(data);
        this.added = true;
        this.ref.detectChanges();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeFavorite() {
    this.movieService.removeFavorite(this.movie.id).subscribe({
      next: (data) => {
        console.log(data);
        this.added = false;
        this.ref.detectChanges();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  checkIfAdded() {
    this.movieService.isFavorite(this.movie.id).subscribe({
      next: (data) => {
        this.added = data.isfav;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  toHrandMin(tMinutes: number) {
    const hours = Math.floor(tMinutes / 60);
    const mins = tMinutes % 60;
    return `${hours > 0 ? ` ${hours}h` : ''} ${mins > 0 ? ` ${mins}m` : ''}`;
  }

  close(): void {
    if (this.overlayRef) this.overlayRef.dispose();
  }
}
