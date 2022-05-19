import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.css']
})
export class LifecyclehookComponent implements OnInit ,OnDestroy{

  constructor() {
    console.log("HI Constructor : LCH")
   }

  ngOnInit(): void {
    console.log("HI ON INIT  : LCH")
  }
  
  
  ngOnDestroy(): void {
   console.log("LCH Destroied ")
 
  }

  
}
