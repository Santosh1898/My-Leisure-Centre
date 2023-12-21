import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreAmesburyPageRoutingModule } from './centre-amesbury-routing.module';

import { CentreAmesburyPage } from './centre-amesbury.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreAmesburyPageRoutingModule
  ],
  declarations: [CentreAmesburyPage]
})
export class CentreAmesburyPageModule {}
