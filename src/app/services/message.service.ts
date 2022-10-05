import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Component, OnInit ,Input} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string = "this means it failed to pass the message through";

  showNotification(input: string) {
    this.message = input;
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 3 * 1000,
    });
  }
  constructor(private _snackBar: MatSnackBar) { 
    console.log("messages constructor");
    
  }
  
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'notification.html',
  styles: [
    `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
})
export class PizzaPartyComponent {
  message: string;
  constructor(messageService: MessageService) {
    this.message = messageService.message;
  }
}