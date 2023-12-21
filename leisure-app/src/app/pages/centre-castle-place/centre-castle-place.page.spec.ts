import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreCastlePlacePage } from './centre-castle-place.page';

describe('CentreCastlePlacePage', () => {
  let component: CentreCastlePlacePage;
  let fixture: ComponentFixture<CentreCastlePlacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreCastlePlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
