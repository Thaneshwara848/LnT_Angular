import { Component, OnInit } from '@angular/core';
import { DbserService } from '../dbser.service';

@Component({
  selector: 'app-db2',
  templateUrl: './db2.component.html',
  styleUrls: ['./db2.component.css']
})
export class Db2Component implements OnInit {

  constructor(private db2:DbserService) { }

  ngOnInit(): void {
  }

  name='';
  db()
  {
   this.name=  this.db2.mynewname;
  }

}
