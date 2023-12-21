import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreLeightonPage } from './centre-leighton.page';

describe('CentreLeightonPage', () => {
  let component: CentreLeightonPage;
  let fixture: ComponentFixture<CentreLeightonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreLeightonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
