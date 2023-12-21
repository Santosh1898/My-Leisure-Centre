import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreValePage } from './centre-vale.page';

describe('CentreValePage', () => {
  let component: CentreValePage;
  let fixture: ComponentFixture<CentreValePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreValePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
