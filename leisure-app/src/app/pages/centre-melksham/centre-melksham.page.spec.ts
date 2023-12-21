import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreMelkshamPage } from './centre-melksham.page';

describe('CentreMelkshamPage', () => {
  let component: CentreMelkshamPage;
  let fixture: ComponentFixture<CentreMelkshamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreMelkshamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
