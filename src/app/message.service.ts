import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageList : string[]= [];
  constructor() { }
  add(message : string): void{
    this.messageList.push(message);
  }
  clear(){
    this.messageList = [];
  }
}
