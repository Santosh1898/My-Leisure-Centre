import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreAmesburyPage } from './centre-amesbury.page';
import { Router } from '@angular/router';

describe('CentreAmesburyPage', () => {
  let component: CentreAmesburyPage;
  let fixture: ComponentFixture<CentreAmesburyPage>;
  let router: Router;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentreAmesburyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
