import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDF2Component } from './rdf2.component';

describe('RDF2Component', () => {
  let component: RDF2Component;
  let fixture: ComponentFixture<RDF2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RDF2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RDF2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
