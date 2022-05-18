import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  mybtndisabled=false; 
  myimg="../../assets/LnT1.jpg";


  i=0 ;

  increment1(){
    console.log("HI Increment.....! "+this.i++)
  }
  Decerement1(){
    console.log("HI Decerement ....!"+this.i--)
  }

  res=0;
  add(a:any,b:any)
  {
      this.res=parseInt (a)+ parseInt (b) ;
  }

  sub(a:any,b:any)
  {
      this.res=parseInt (a)-  parseInt (b) ;
  }
  mul(a:any,b:any)
  {
      this.res=parseInt (a)  * parseInt (b) ;
  }

  div(a:any,b:any)
  {
      this.res=parseInt (a) /   parseInt (b) ;
  }


  Fullname="Thanesh";
}
