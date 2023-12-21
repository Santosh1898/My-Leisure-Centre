import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreMarlboroughPage } from './centre-marlborough.page';

describe('CentreMarlboroughPage', () => {
  let component: CentreMarlboroughPage;
  let fixture: ComponentFixture<CentreMarlboroughPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreMarlboroughPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
