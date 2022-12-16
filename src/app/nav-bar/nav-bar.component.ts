import { Component, OnInit } from '@angular/core';
import { Nav } from '../interfaces/navbar';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isLoggedIn = false;
  autohide = false;
  hide = true;
  url = '/home';
  interval: any;
  //you can access properties like this in html e.g. {{title}} or {{prop.title}}
  title = 'Flex';
  prop: Nav = {
    title: 'Test',
  };
  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.router.events.subscribe((val) => {
      console.log(this.router.url);
      this.url = this.router.url;
    });
  }

  toggleToolbar() {
    this.hide = !this.hide;
  }

  mouseEnter() {
    this.autohide = false;
    clearTimeout(this.interval);
  }

  mouseLeave() {
    this.autohide = true;
    this.setTimer();
  }

  setTimer() {
    clearTimeout(this.interval);
    this.interval = setTimeout(() => {
      if (this.autohide) {
        this.hide = true;
      }
    }, 500);
  }

  GoToMovies() {
    console.log('Go to movies');
    this.router.navigate(['/', 'movies']);
  }

  GoToSeries() {
    console.log('Go to series');
    this.router.navigate(['/', 'series']);
  }

  GoHome() {
    console.log('Go to Home');
    this.router.navigate(['/', 'home']);
  }

  GoToLogin() {
    console.log('Go to Login');
    this.router.navigate(['/', 'login']);
  }

  GoToFavorites() {
    console.log('Go to Favs');
    this.router.navigate(['/', 'favorites']);
  }
}
