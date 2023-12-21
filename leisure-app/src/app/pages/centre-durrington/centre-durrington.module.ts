import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreDurringtonPageRoutingModule } from './centre-durrington-routing.module';

import { CentreDurringtonPage } from './centre-durrington.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreDurringtonPageRoutingModule
  ],
  declarations: [CentreDurringtonPage]
})
export class CentreDurringtonPageModule {}
