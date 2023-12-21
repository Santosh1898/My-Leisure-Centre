import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreWestburyPage } from './centre-westbury.page';

describe('CentreWestburyPage', () => {
  let component: CentreWestburyPage;
  let fixture: ComponentFixture<CentreWestburyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreWestburyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
