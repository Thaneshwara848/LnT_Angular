import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogservService {

  constructor() { }
  chatmsgs:any=[];

  chat(msg:any)
  {
    this.chatmsgs.push(msg);

    return this.chatmsgs;
  }
}
