import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreCalnePage } from './centre-calne.page';

describe('CentreCalnePage', () => {
  let component: CentreCalnePage;
  let fixture: ComponentFixture<CentreCalnePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreCalnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
