import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreFivePage } from './centre-five.page';

describe('CentreFivePage', () => {
  let component: CentreFivePage;
  let fixture: ComponentFixture<CentreFivePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
