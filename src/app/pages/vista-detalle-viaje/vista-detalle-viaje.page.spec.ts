import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaDetalleViajePage } from './vista-detalle-viaje.page';

describe('VistaDetalleViajePage', () => {
  let component: VistaDetalleViajePage;
  let fixture: ComponentFixture<VistaDetalleViajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDetalleViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
