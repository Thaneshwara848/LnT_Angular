import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent implements OnInit {

  constructor() { }
abc=true;
xyz=true;


fruits=["Apple","Banana","Chiko","Orange","mango ","Graps"]

addfriut(friut:any)
{
  this.fruits.push(friut);
}


  ngOnInit(): void {
  }


  people = [
    {
      "name": "Douglas  Pace",
      "age": 35
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32
    },
    {
      "name": "Day  Meyers",
      "age": 21
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34
    },
    {
      "name": "Cook  Tyson",
      "age": 32
    }
  ];


  swithcAbc=10;
  clr="red";
}
