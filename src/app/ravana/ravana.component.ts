import { Component, OnInit } from '@angular/core';
import { LogservService } from '../logserv.service';

@Component({
  selector: 'app-ravana',
  templateUrl: './ravana.component.html',
  styleUrls: ['./ravana.component.css']
})
export class RavanaComponent implements OnInit {

  constructor(private cs:LogservService) { }

  ngOnInit(): void {
  }

  msgs:any=[];
  send(msg: any){
    
    this.msgs=this.cs.chat(msg);
  }
}
