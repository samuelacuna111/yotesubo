import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaViajesPage } from './vista-viajes.page';

describe('VistaViajesPage', () => {
  let component: VistaViajesPage;
  let fixture: ComponentFixture<VistaViajesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
