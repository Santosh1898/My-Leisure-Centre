import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreTrowbridgePage } from './centre-trowbridge.page';

describe('CentreTrowbridgePage', () => {
  let component: CentreTrowbridgePage;
  let fixture: ComponentFixture<CentreTrowbridgePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreTrowbridgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
