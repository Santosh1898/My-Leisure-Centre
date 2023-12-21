import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreNadderPage } from './centre-nadder.page';

describe('CentreNadderPage', () => {
  let component: CentreNadderPage;
  let fixture: ComponentFixture<CentreNadderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreNadderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
