import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreWestburyPageRoutingModule } from './centre-westbury-routing.module';

import { CentreWestburyPage } from './centre-westbury.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreWestburyPageRoutingModule
  ],
  declarations: [CentreWestburyPage]
})
export class CentreWestburyPageModule {}
