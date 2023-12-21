import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreLimeKilnPage } from './centre-lime-kiln.page';

describe('CentreLimeKilnPage', () => {
  let component: CentreLimeKilnPage;
  let fixture: ComponentFixture<CentreLimeKilnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreLimeKilnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
