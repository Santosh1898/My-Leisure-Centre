import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreMelkshamPageRoutingModule } from './centre-melksham-routing.module';

import { CentreMelkshamPage } from './centre-melksham.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreMelkshamPageRoutingModule
  ],
  declarations: [CentreMelkshamPage]
})
export class CentreMelkshamPageModule {}
