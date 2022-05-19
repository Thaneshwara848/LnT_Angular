import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecyclehook1Component } from './lifecyclehook1.component';

describe('Lifecyclehook1Component', () => {
  let component: Lifecyclehook1Component;
  let fixture: ComponentFixture<Lifecyclehook1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lifecyclehook1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecyclehook1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
