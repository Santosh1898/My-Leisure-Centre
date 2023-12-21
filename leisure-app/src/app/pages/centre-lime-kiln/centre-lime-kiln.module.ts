import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreLimeKilnPageRoutingModule } from './centre-lime-kiln-routing.module';

import { CentreLimeKilnPage } from './centre-lime-kiln.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreLimeKilnPageRoutingModule
  ],
  declarations: [CentreLimeKilnPage]
})
export class CentreLimeKilnPageModule {}
