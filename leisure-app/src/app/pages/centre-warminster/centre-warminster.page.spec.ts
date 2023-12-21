import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreWarminsterPage } from './centre-warminster.page';

describe('CentreWarminsterPage', () => {
  let component: CentreWarminsterPage;
  let fixture: ComponentFixture<CentreWarminsterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreWarminsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
