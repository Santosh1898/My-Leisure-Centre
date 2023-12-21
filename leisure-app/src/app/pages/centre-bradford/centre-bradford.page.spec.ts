import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreBradfordPage } from './centre-bradford.page';

describe('CentreBradfordPage', () => {
  let component: CentreBradfordPage;
  let fixture: ComponentFixture<CentreBradfordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreBradfordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
