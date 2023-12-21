import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreOlympiadPage } from './centre-olympiad.page';

describe('CentreOlympiadPage', () => {
  let component: CentreOlympiadPage;
  let fixture: ComponentFixture<CentreOlympiadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreOlympiadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
