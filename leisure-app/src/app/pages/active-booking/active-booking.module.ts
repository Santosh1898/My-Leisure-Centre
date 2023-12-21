import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveBookingPageRoutingModule } from './active-booking-routing.module';

import { ActiveBookingPage } from './active-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveBookingPageRoutingModule
  ],
  declarations: [ActiveBookingPage]
})
export class ActiveBookingPageModule {}
