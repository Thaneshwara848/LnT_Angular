import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { LogservService } from '../logserv.service';

@Component({
  selector: 'app-seetha',
  templateUrl: './seetha.component.html',
  styleUrls: ['./seetha.component.css']
})
export class SeethaComponent implements OnInit {

  constructor(private cs:LogservService) { }

  ngOnInit(): void {
  }

  msgs:any=[];
  send(msg: any){
    
    this.msgs=this.cs.chat(msg);
  }
  abc(){
    
  }
}
