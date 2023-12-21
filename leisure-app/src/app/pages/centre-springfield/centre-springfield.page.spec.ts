import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreSpringfieldPage } from './centre-springfield.page';

describe('CentreSpringfieldPage', () => {
  let component: CentreSpringfieldPage;
  let fixture: ComponentFixture<CentreSpringfieldPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreSpringfieldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
