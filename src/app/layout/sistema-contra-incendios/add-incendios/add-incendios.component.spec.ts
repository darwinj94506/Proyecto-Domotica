import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncendiosComponent } from './add-incendios.component';

describe('AddIncendiosComponent', () => {
  let component: AddIncendiosComponent;
  let fixture: ComponentFixture<AddIncendiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIncendiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIncendiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
