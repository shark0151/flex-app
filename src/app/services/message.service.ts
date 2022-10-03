import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string = "";

  add(input: string) {
    this.message = input;
  }

  
}
