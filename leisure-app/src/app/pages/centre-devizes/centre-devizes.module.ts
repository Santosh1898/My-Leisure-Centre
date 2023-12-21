import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreDevizesPageRoutingModule } from './centre-devizes-routing.module';

import { CentreDevizesPage } from './centre-devizes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreDevizesPageRoutingModule
  ],
  declarations: [CentreDevizesPage]
})
export class CentreDevizesPageModule {}
