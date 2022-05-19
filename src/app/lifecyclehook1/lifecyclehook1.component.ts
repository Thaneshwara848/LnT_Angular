import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecyclehook1',
  templateUrl: './lifecyclehook1.component.html',
  styleUrls: ['./lifecyclehook1.component.css']
})
export class Lifecyclehook1Component implements OnInit, OnDestroy {

 
  ngOnInit(): void {
    console.log("HI ON INIT  : LCH1")
  }
  
  constructor() {
    console.log("HI Constructor : LCH1")
   }

 
  
  ngOnDestroy(): void {
   console.log("LCH1 Destroied ")
  }
}
