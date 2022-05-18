import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbcalComponent } from './dbcal.component';

describe('DbcalComponent', () => {
  let component: DbcalComponent;
  let fixture: ComponentFixture<DbcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbcalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
