import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MovieOverlayComponent } from '../movie-overlay/movie-overlay.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie?: any;
  constructor(private overlay: Overlay) { }

  ngOnInit(): void {
    if (this.movie) {
      console.log(this.movie);
    }
  }

  openPopup() 
  {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
      ,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      width: '200px',
      maxHeight: 300,
    });
    const popupComponentPortal = new ComponentPortal(MovieOverlayComponent);

    const componentRef  = overlayRef.attach(popupComponentPortal);
    componentRef.instance.movie = this.movie;
    componentRef.instance.overlayRef = overlayRef;
    
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    
  }

}
