import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveBookingService {
  private bookingKey = 'bookings';

  constructor() {}

  addBooking(booking: any) {
    let bookings = this.getBookings();
    if (!bookings) {
      bookings = [];
    }
    bookings.unshift(booking);
    localStorage.setItem(this.bookingKey, JSON.stringify(bookings));
  }

  getBookings(): any[] {
    const bookingsString = localStorage.getItem(this.bookingKey);
    return bookingsString ? JSON.parse(bookingsString) : [];
  }
}