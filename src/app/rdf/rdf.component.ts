import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rdf',
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.css']
})
export class RDFComponent implements OnInit {

  constructor(private formbBuilder : FormBuilder) { }

  ngOnInit(): void {
   
  }

}
