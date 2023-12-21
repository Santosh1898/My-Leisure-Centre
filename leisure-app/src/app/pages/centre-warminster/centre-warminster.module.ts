import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreWarminsterPageRoutingModule } from './centre-warminster-routing.module';

import { CentreWarminsterPage } from './centre-warminster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreWarminsterPageRoutingModule
  ],
  declarations: [CentreWarminsterPage]
})
export class CentreWarminsterPageModule {}
