import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-overlay',
  templateUrl: './movie-overlay.component.html',
  styleUrls: ['./movie-overlay.component.css']
})
export class MovieOverlayComponent implements OnInit {
  @Input() movie?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
