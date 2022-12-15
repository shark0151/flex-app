import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { OverlayRef  } from '@angular/cdk/overlay';
@Component({
  selector: 'app-movie-overlay',
  templateUrl: './movie-overlay.component.html',
  styleUrls: ['./movie-overlay.component.css']
})
export class MovieOverlayComponent implements OnInit {
  @Input() movie?: any;
  movieDetails?: any;
  overlayRef?: OverlayRef
  isTv: boolean = false;
  constructor(private movieService: MovieService,private ref: ChangeDetectorRef ) { }

  ngOnInit(): void {

    this.isTv = this.movie.first_air_date != null;
    this.movieService.getDetails(this.movie.id, this.isTv).subscribe({
      next: data => {
        let parse = JSON.parse(JSON.stringify(data));
        this.movieDetails = parse;
        if (this.isTv)
        {
        this.movieDetails.original_title = this.movieDetails.original_name;
        }

        console.log(data);
        this.ref.detectChanges();
      }
      
    });
  }

  addFavorite() {
    
  }

  close():void {
    if (this.overlayRef)
    this.overlayRef.dispose();
  }

}
