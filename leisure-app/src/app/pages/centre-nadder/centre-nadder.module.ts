import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreNadderPageRoutingModule } from './centre-nadder-routing.module';

import { CentreNadderPage } from './centre-nadder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreNadderPageRoutingModule
  ],
  declarations: [CentreNadderPage]
})
export class CentreNadderPageModule {}
