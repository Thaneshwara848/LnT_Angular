import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbcal',
  templateUrl: './dbcal.component.html',
  styleUrls: ['./dbcal.component.css']
})
export class DbcalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  roi=0;
emi=0
  emical(prince:any,time:any){
   this.emi= (prince* time*this.roi)/100;
  }
loan="";
  myloan (event: any) {
    //update the ui
    this.loan = event.target.value;
    console.log("My Loan Type is :"+this.loan)
    if(this.loan=="car")
    {
      this.roi=10;
    }
    else if(this.loan=="home")
    {
      this.roi=8;
    }
    else if(this.loan=="edu")
    {
      this.roi=6;
    }
  }
}
