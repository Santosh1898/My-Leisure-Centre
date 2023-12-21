import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreActivityZonePage } from './centre-activity-zone.page';

describe('CentreActivityZonePage', () => {
  let component: CentreActivityZonePage;
  let fixture: ComponentFixture<CentreActivityZonePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreActivityZonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
