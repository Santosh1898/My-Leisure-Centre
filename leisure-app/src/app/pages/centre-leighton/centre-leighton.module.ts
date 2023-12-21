import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreLeightonPageRoutingModule } from './centre-leighton-routing.module';

import { CentreLeightonPage } from './centre-leighton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreLeightonPageRoutingModule
  ],
  declarations: [CentreLeightonPage]
})
export class CentreLeightonPageModule {}
