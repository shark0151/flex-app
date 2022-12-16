import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { MatCard } from '@angular/material/card';
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
  constructor(
    private movieService: MovieService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isTv = this.movie.first_air_date != null;
    this.movieService.getDetails(this.movie.id, this.isTv).subscribe({
      next: (data) => {
        let parse = JSON.parse(JSON.stringify(data));
        this.movieDetails = parse;
        console.log(data);
        this.movieDetails.backdrop_path = "https://image.tmdb.org/t/p/original" + this.movieDetails.backdrop_path;
        this.ref.detectChanges();
      },
    });
  }

  toHrandMin(tMinutes: number) {
    const hours = Math.floor(tMinutes / 60);
    const mins = tMinutes % 60;
    return `${hours}h${mins > 0 ? ` ${mins}m` : ''}`;
  }

  addFavorite() {}

  close(): void {
    if (this.overlayRef) this.overlayRef.dispose();
  }
}
