import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreSpringfieldPageRoutingModule } from './centre-springfield-routing.module';

import { CentreSpringfieldPage } from './centre-springfield.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreSpringfieldPageRoutingModule
  ],
  declarations: [CentreSpringfieldPage]
})
export class CentreSpringfieldPageModule {}
