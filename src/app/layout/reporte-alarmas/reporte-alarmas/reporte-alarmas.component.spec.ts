import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAlarmasComponent } from './reporte-alarmas.component';

describe('ReporteAlarmasComponent', () => {
  let component: ReporteAlarmasComponent;
  let fixture: ComponentFixture<ReporteAlarmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteAlarmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteAlarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
