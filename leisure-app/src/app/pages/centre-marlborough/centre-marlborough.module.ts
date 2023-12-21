import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreMarlboroughPageRoutingModule } from './centre-marlborough-routing.module';

import { CentreMarlboroughPage } from './centre-marlborough.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreMarlboroughPageRoutingModule
  ],
  declarations: [CentreMarlboroughPage]
})
export class CentreMarlboroughPageModule {}
