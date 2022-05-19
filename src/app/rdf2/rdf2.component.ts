import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rdf2',
  templateUrl: './rdf2.component.html',
  styleUrls: ['./rdf2.component.css']
})
export class RDF2Component implements OnInit {


  student:any;
  constructor() { }

  ngOnInit(): void {

   this.student=new FormGroup({

    firstName:new FormControl("",Validators.compose(
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z \-\']+')
      ]
    )),

    lastName:new FormControl("",Validators.compose(
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]
    )),

    age :new FormControl("",Validators.compose(
      [
        Validators.required,
        Validators.min(18),
        Validators.max(60),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ]
    )),
    course:new FormControl("",Validators.compose(
      [
        Validators.required
      ]
    ))
   })
    
  }
  
 display(data:string){
  console.log(data)
 }

}
