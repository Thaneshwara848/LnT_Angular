import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf2',
  templateUrl: './tdf2.component.html',
  styleUrls: ['./tdf2.component.css']
})
export class TDF2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mydata(data:any){
    console.log(data)
  }

}
