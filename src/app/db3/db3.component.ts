import { Component, OnInit } from '@angular/core';
import { DbserService } from '../dbser.service';

@Component({
  selector: 'app-db3',
  templateUrl: './db3.component.html',
  styleUrls: ['./db3.component.css']
})
export class Db3Component implements OnInit {

  constructor(private db3:DbserService) { }

  ngOnInit(): void {
  }

  db()
  {
      this.db3.mynewname
  }
}
