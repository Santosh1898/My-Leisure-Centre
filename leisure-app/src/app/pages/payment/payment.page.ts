import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  centreName: string = '';
  activityName: string = '';
  selectedDate: string = '';
  timeSlot: string = '';
  cost: string = '';

  // to calculate the total cost
  quantity: number = 1; // Default quantity
  totalCost: string = ''; // Initialize total cost as an empty string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController // Add AlertController to the constructor
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.centreName = params['centreName'];
      this.activityName = params['activityName'];
      this.selectedDate = params['selectedDate'];
      this.timeSlot = params['timeSlot'];
      this.cost = params['cost'];
      // Remove the pound sign and convert the cost to a float
      this.cost = this.cost.replace('£', '');
      const costValue = parseFloat(this.cost); // Parse the cost as a number
      this.totalCost = `£${costValue.toFixed(2)}`; // Format the total cost with the pound sign and 2 decimal places
    });
  }

  async presentConfirmationAlert() {
    const alert = await this.alertController.create({
      header: 'Booking Confirmation',
      message: 'Your booking is confirmed. Click OK to view your booking details.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navigateToActiveBooking();
          },
        },
      ],
    });

    await alert.present();
  }

  payNow() {
    this.presentConfirmationAlert();
  }

  navigateToActiveBooking() {
    const currentDate = new Date();
    const systemDateTime = currentDate.toISOString();

    this.router.navigate(['active-booking'], {
      queryParams: {
        centreName: this.centreName,
        activityName: this.activityName,
        selectedDate: this.selectedDate,
        timeSlot: this.timeSlot,
        quantity: this.quantity,
        totalCost: this.totalCost,
        systemDateTime: systemDateTime,
      },
    });
  }

  // Function to calculate the total cost based on the quantity and cost per person
  calculateTotalCost() {
    if (this.quantity && this.cost) {
      const costValue = parseFloat(this.cost); // Parse the cost as a number
      const calculatedCost = this.quantity * costValue;
      this.totalCost = `£${calculatedCost.toFixed(2)}`; // Format the total cost with the pound sign and 2 decimal places
    } else {
      this.totalCost = '£0.00';
    }
  }
}
