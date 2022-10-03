import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  durationInSeconds = 3;
  constructor(public messageService: MessageService, private _snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
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