import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreActivityZonePageRoutingModule } from './centre-activity-zone-routing.module';

import { CentreActivityZonePage } from './centre-activity-zone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreActivityZonePageRoutingModule
  ],
  declarations: [CentreActivityZonePage]
})
export class CentreActivityZonePageModule {}
