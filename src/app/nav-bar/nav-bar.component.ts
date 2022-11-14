import { Component, OnInit } from '@angular/core';
import { Nav } from '../interfaces/navbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  autohide = false
  hide= true;
  interval: any;
  //you can access properties like this in html e.g. {{title}} or {{prop.title}}
  title = 'Flex';
  prop: Nav = {
  title:"Test"
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  toggleToolbar(){
    this.hide = ! this.hide;
    
  }

  mouseEnter(){
    this.autohide = false;
    clearTimeout(this.interval);
  }

  mouseLeave(){
    this.autohide = true;
    this.setTimer();
  }

  setTimer(){
    clearTimeout(this.interval);
    this.interval = setTimeout(() => {
      if(this.autohide){
      this.hide = true;
      }
    }, 1000);
  }

  GoToMovies(){
    console.log("Go to movies");
    this.router.navigate(['/', 'movies']);
  }

  GoToSeries(){
    console.log("Go to series");
    this.router.navigate(['/', 'series']);
  }

  GoHome(){
    console.log("Go to Home");
    this.router.navigate(['/', 'home']);
  }

}

