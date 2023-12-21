import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreCastlePlacePageRoutingModule } from './centre-castle-place-routing.module';

import { CentreCastlePlacePage } from './centre-castle-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreCastlePlacePageRoutingModule
  ],
  declarations: [CentreCastlePlacePage]
})
export class CentreCastlePlacePageModule {}
