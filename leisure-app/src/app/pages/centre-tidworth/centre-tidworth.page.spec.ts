import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreTidworthPage } from './centre-tidworth.page';

describe('CentreTidworthPage', () => {
  let component: CentreTidworthPage;
  let fixture: ComponentFixture<CentreTidworthPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreTidworthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
