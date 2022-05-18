import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserService {

  constructor() { }
  mynewname=''
  commondblogic(myname:any)
  {
   this.mynewname= myname;
    console.log("Commen for all component ..... 100 lines ")
  }
}
