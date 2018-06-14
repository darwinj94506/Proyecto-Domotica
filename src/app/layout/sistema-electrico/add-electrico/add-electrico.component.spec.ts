import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElectricoComponent } from './add-electrico.component';

describe('AddElectricoComponent', () => {
  let component: AddElectricoComponent;
  let fixture: ComponentFixture<AddElectricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddElectricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddElectricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
