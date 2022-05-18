import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { LogservService } from '../logserv.service';


@Component({
  selector: 'app-rama',
  templateUrl: './rama.component.html',
  styleUrls: ['./rama.component.css']
})
export class RamaComponent implements OnInit {

  constructor(private cs:LogservService) { }

  ngOnInit(): void {
  }

  msgs:any=[];
  send(msg: any){
    
    this.msgs=this.cs.chat(msg);
  }
}
