import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreBradfordPageRoutingModule } from './centre-bradford-routing.module';

import { CentreBradfordPage } from './centre-bradford.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreBradfordPageRoutingModule
  ],
  declarations: [CentreBradfordPage]
})
export class CentreBradfordPageModule {}
