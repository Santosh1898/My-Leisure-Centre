import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveBookingPage } from './active-booking.page';

describe('ActiveBookingPage', () => {
  let component: ActiveBookingPage;
  let fixture: ComponentFixture<ActiveBookingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActiveBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
