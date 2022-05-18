import { Component, OnInit } from '@angular/core';
import { DbserService } from '../dbser.service';

@Component({
  selector: 'app-db1',
  templateUrl: './db1.component.html',
  styleUrls: ['./db1.component.css']
})
export class Db1Component implements OnInit {

  constructor(private db1:DbserService) { }

  ngOnInit(): void {
  }
  db(myname:any)
  {

   this.db1.commondblogic(myname);   
  }

}
