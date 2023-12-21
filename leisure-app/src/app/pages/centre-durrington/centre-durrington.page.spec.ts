import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreDurringtonPage } from './centre-durrington.page';

describe('CentreDurringtonPage', () => {
  let component: CentreDurringtonPage;
  let fixture: ComponentFixture<CentreDurringtonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreDurringtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
