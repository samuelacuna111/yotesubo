import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearAutpPage } from './crear-autp.page';

describe('CrearAutpPage', () => {
  let component: CrearAutpPage;
  let fixture: ComponentFixture<CrearAutpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAutpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
