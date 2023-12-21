import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreDevizesPage } from './centre-devizes.page';

describe('CentreDevizesPage', () => {
  let component: CentreDevizesPage;
  let fixture: ComponentFixture<CentreDevizesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreDevizesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
