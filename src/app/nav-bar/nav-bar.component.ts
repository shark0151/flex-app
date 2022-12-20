import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Nav } from '../interfaces/navbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  autohide = false;
  hide = true;
  url = '/home';
  interval: any;
  //you can access properties like this in html e.g. {{title}} or {{prop.title}}
  title = 'Flex';
  prop: Nav = {
    title: 'Test',
  };
  currentScreenSize?: string;
  isSmallScreen = false;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
    [Breakpoints.Handset, 'Handset'],
  ]);
  constructor(private router: Router, breakpointObserver: BreakpointObserver, private ref: ChangeDetectorRef) {
    breakpointObserver
      .observe([
        '(max-width: 800px)',
        '(min-width: 801px)',
      ])
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = query;
            if (query === '(max-width: 800px)') {
              this.isSmallScreen = true;
            } else {
              this.isSmallScreen = false;
            }
            this.ref.detectChanges();
          }
        }
      });
  }

  ngOnInit(): void {
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
