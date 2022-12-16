import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.css'],
})
export class FavPageComponent implements OnInit {
  isLoggedIn=false;
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.isLoggedIn=this.storageService.isLoggedIn();
  }
}
