import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaEstadoViajePage } from './vista-estado-viaje.page';

describe('VistaEstadoViajePage', () => {
  let component: VistaEstadoViajePage;
  let fixture: ComponentFixture<VistaEstadoViajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEstadoViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
