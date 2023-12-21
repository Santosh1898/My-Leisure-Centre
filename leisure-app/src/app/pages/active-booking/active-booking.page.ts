import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveBookingService } from './active-booking.service';

@Component({
  selector: 'app-active-booking',
  templateUrl: './active-booking.page.html',
  styleUrls: ['./active-booking.page.scss'],
})
export class ActiveBookingPage implements OnInit {
  centreName: string = '';
  activityName: string = '';
  selectedDate: string = '';
  timeSlot: string = '';
  quantity: number = 0;
  totalCost: string = '';
  systemDateTime: string = ''; // Add the system date and time variable
  bookings: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activeBookingService: ActiveBookingService
  ) { }

  ngOnInit() {
    // If the page is visited directly, retrieve the most recent five bookings from the service
    this.bookings = this.activeBookingService.getBookings().slice(0, 5);
  
    this.route.queryParams.subscribe((params) => {
      this.centreName = params['centreName'];
      this.activityName = params['activityName'];
      this.selectedDate = params['selectedDate'];
      this.timeSlot = params['timeSlot'];
      this.quantity = params['quantity'];
      this.totalCost = params['totalCost'];
      this.systemDateTime = params['systemDateTime']; // Get the system date and time
  
      if (this.centreName) {
        const booking = {
          centreName: this.centreName,
          activityName: this.activityName,
          selectedDate: this.selectedDate,
          timeSlot: this.timeSlot,
          quantity: this.quantity,
          totalCost: this.totalCost,
          systemDateTime: this.systemDateTime, // Add the system date and time to the booking
        };
        this.activeBookingService.addBooking(booking);
        this.bookings = this.activeBookingService.getBookings().slice(0, 5);
      }
    });
  }

  home(){
    this.router.navigate(['home']);
  }

}
