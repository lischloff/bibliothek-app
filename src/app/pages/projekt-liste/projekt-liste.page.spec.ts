import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjektListePage } from './projekt-liste.page';

describe('ProjektListePage', () => {
  let component: ProjektListePage;
  let fixture: ComponentFixture<ProjektListePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektListePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
