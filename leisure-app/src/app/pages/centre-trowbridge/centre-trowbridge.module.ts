import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreTrowbridgePageRoutingModule } from './centre-trowbridge-routing.module';

import { CentreTrowbridgePage } from './centre-trowbridge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreTrowbridgePageRoutingModule
  ],
  declarations: [CentreTrowbridgePage]
})
export class CentreTrowbridgePageModule {}
