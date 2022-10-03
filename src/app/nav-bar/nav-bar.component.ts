import { Component, OnInit } from '@angular/core';
import { Nav } from '../interfaces/navbar';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  //you can access properties like this in html e.g. {{title}} or {{prop.title}}
  title = 'Flex';
  prop: Nav = {
  title:"Test"
  }
  constructor() { }

  ngOnInit(): void {
  }

}

