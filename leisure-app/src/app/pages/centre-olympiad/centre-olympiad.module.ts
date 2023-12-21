import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreOlympiadPageRoutingModule } from './centre-olympiad-routing.module';

import { CentreOlympiadPage } from './centre-olympiad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreOlympiadPageRoutingModule
  ],
  declarations: [CentreOlympiadPage]
})
export class CentreOlympiadPageModule {}
